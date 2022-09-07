import React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle,Text} from "react-native"
import { AppColors } from "../styles"
import { CreationButton } from "./CreationButton"
import { MainView } from "./MainView"
import BackButton from '../components/BackButton'
import { Window } from "../geral"
import Animated from "react-native-reanimated"




interface PageButtonInterface {
    title?:string,
    children?:React.ReactNode,
    textStyle?:StyleProp<TextStyle>,
    style?:StyleProp<ViewStyle>,
    onPress?: () => void,
    mainViewStyle?:StyleProp<ViewStyle>,
    shouldGoBack?: boolean,
    textRender?: React.ReactNode,
    onBack?: () => void,
}


export const PageButton = ({title,textStyle,style,onPress,textRender}:PageButtonInterface) => {
    return <Animated.View style={[{alignSelf:'center',alignItems:'center',justifyContent:'center',width:'100%',backgroundColor:AppColors.azul,borderRadius:15},style]}>
    <TouchableOpacity  onPress={onPress} style={[{alignItems:'center',width:'100%'}]}>
        <Animated.View style={[{alignSelf:'center',width:'96%'}]}>
        {textRender?.valueOf() == null && <Text style={[{margin:'3%',alignSelf:'center',fontFamily:'exo',color:'white',fontSize:20},textStyle]}>{title}</Text>}
        {textRender}
    </Animated.View>
    </TouchableOpacity>
    </Animated.View>
}