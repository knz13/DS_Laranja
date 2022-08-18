import React, { useEffect, useState } from "react"
import { TextStyle, TouchableOpacity } from "react-native"
import Animated, { runOnJS, SlideInDown,SlideInLeft, SlideOutDown, SlideOutLeft, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { Modal, StyleProp, Text, View, ViewStyle } from "react-native"
import { MainView } from "./MainView"
import { Window } from "../geral"
import { AppColors } from "../styles"

interface ButtonInterface { 
    children?:React.ReactNode,
    title:string,
    onPress?: () => void,
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    backButtonStyle?:StyleProp<ViewStyle>,
    shouldGoBack?:boolean
}

export const CreationButton = ({children,title,onPress,style,textStyle,backButtonStyle,shouldGoBack} : ButtonInterface) => {

    const [visible,setVisible] = useState(false);
    const [modal,setModal] = useState(false);
    const opacity = useSharedValue(0);

    useEffect(() => {
        if(shouldGoBack?.valueOf() != undefined){
            if(shouldGoBack){
                setVisible(false)
            }
        }
    },[shouldGoBack])

    useEffect(() => {
        if(visible){
            setModal(true);
            opacity.value = withTiming(1,{duration:500})
        }
        else {
            function func(finished) {
                if(finished){
                    setModal(false);
                }
            }

            opacity.value = withTiming(0,{duration:500},(finished) => runOnJS(func)(finished))
        }
    },[visible])

    const animationStyle = useAnimatedStyle(() => {
        return {
            opacity:opacity.value
        }
    })

    return <>
    <View style={[{alignSelf:'center',alignItems:'center',justifyContent:'center'},style]}>
    <TouchableOpacity style={[{alignSelf:'flex-start'}]} onPress={() => {
        if(onPress){
            onPress();
        }
            if(children){
                setVisible(true);
            }
        }}>
        {/* <Animated.View style={[{alignItems:'center',justifyContent:'center',alignSelf:'center'}]}> */}
            <Text style={[{margin:'3%'},textStyle]}>{title}</Text>
            <Modal visible={modal} transparent={true}>
                {modal && 
                <Animated.View style={[animationStyle,{flex:1}]}>
                {children}
                <Animated.View entering={SlideInLeft.duration(500)} style={{position:'absolute',top:Window.height/20,left:Window.width/20}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => {
                        setVisible(false);
                    }}>
                        <View style={[{width:50,height:50,borderRadius:25,backgroundColor:AppColors.laranja_radioativo,alignItems:'center',justifyContent:'center'},backButtonStyle]}>
                            <Text style={{fontSize:25}}>{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                </Animated.View>
                } 
            </Modal>
        {/* </Animated.View> */}
    </TouchableOpacity>
    </View>
    </>
}
