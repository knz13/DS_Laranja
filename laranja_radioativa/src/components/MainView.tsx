import React from "react"
import { KeyboardAvoidingView,Platform, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AppColors, Styles } from "../styles"
import { useHeaderHeight } from '@react-navigation/elements';

interface ViewInterface {
    children?:React.ReactNode
}

export const MainView = ({children} : ViewInterface) => {
    const headerHeight = useHeaderHeight();
    return <KeyboardAvoidingView 
    keyboardVerticalOffset={headerHeight}
    style={[Styles.mainView]}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <LinearGradient colors={[AppColors.preto,AppColors.vermelho_saturado]} style={{position:'absolute',height:'100%',width:'100%'}}>
    </LinearGradient>
    {children}
    </KeyboardAvoidingView>
}