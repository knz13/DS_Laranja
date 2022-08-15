import React from "react"
import { KeyboardAvoidingView,Platform, Pressable, View,Keyboard } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AppColors, Styles } from "../styles"
import { useHeaderHeight } from '@react-navigation/elements';

interface ViewInterface {
    children?:React.ReactNode
}

export const MainView = ({children} : ViewInterface) => {
    const headerHeight = useHeaderHeight();
    return <Pressable style={{flex:1}} onPress={() => {
        Keyboard.dismiss()
    }}><KeyboardAvoidingView 
    keyboardVerticalOffset={headerHeight}
    style={[Styles.mainView,{}]}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <LinearGradient  locations={[0.5,0.8]} colors={['#22162b','#960e0e']} style={{position:'absolute',height:'100%',width:'100%',top:0}}>
    </LinearGradient>
    {children}
    </KeyboardAvoidingView>
    </Pressable>
}