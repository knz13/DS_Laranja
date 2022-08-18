import React from "react"
import { KeyboardAvoidingView,Platform, Pressable, View,Keyboard, StyleProp, ViewStyle } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AppColors, Styles } from "../styles"
import { useHeaderHeight } from '@react-navigation/elements';

interface ViewInterface {
    children?:React.ReactNode,
    style?:StyleProp<ViewStyle>
}

export const MainView = ({children,style} : ViewInterface) => {
    const headerHeight = useHeaderHeight();
    return <Pressable style={{flex:1}} onPress={() => {
        Keyboard.dismiss()
    }}><KeyboardAvoidingView 
    style={[Styles.mainView,style]}
    behavior={Platform.OS === "ios" ? "height" : "height"}
    >
    <LinearGradient  locations={[0.5,0.8]} colors={['#22162b','#960e0e']} style={{position:'absolute',height:'100%',width:'100%',top:0}}>
    </LinearGradient>
    {children}
    </KeyboardAvoidingView>
    </Pressable>
}