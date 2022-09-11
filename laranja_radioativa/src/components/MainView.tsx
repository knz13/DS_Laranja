import React from "react"
import { KeyboardAvoidingView,Platform, Pressable, View,Keyboard, StyleProp, ViewStyle, ScrollView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AppColors, Styles } from "../styles"
import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Window } from "../geral";


interface ViewInterface {
    children?:React.ReactNode,
    style?:StyleProp<ViewStyle>
}

export const MainView = ({children,style} : ViewInterface) => {
    const headerHeight = useHeaderHeight();
    return <Pressable style={{flex:1}} onPress={() => {
        Keyboard.dismiss()
    }}>
    <KeyboardAvoidingView
    style={[{width:Window.width/1.2},Styles.mainView,style,{zIndex:100}]}
    behavior={'height'}
    >
    {children}
    </KeyboardAvoidingView>
    </Pressable>
}