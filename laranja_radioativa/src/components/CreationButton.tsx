import React, { useEffect, useState } from "react"
import { TextStyle, TouchableOpacity } from "react-native"
import Animated, { runOnJS, SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { Modal, StyleProp, Text, View, ViewStyle } from "react-native"
import { MainView } from "./MainView"
import { Window } from "../geral"
import { AppColors } from "../styles"

interface ButtonInterface { 
    children?:React.ReactNode,
    title:string,
    onPress?: () => void,
    style?:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>
}

export const CreationButton = ({children,title,onPress,style,textStyle} : ButtonInterface) => {

    const [visible,setVisible] = useState(false);
    const [modal,setModal] = useState(false);
    const opacity = useSharedValue(0);


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

    return <TouchableOpacity style={{width:'100%'}} onPress={() => {
        if(onPress){
            onPress();
        }
        setVisible(true);
        }}>
        <Animated.View style={[{alignItems:'center',justifyContent:'center',backgroundColor:'red'},style]} entering={SlideInDown.duration(500)}>
            <Text style={[{margin:'3%'},textStyle]}>{title}</Text>
            <Modal visible={modal} transparent={true}>
                {modal && 
                <Animated.View style={[animationStyle,{flex:1}]}>
                {children}
                <View style={{position:'absolute',top:Window.height/12,left:Window.width/10}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => {
                        setVisible(false);
                    }}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:AppColors.laranja_radioativo,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:25}}>{'<'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </Animated.View>
                } 
            </Modal>
        </Animated.View>
    </TouchableOpacity>
}
