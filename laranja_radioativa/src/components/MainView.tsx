import React from "react"
import { KeyboardAvoidingView,Platform, Pressable, View,Keyboard, StyleProp, ViewStyle } from "react-native"
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
    }}><KeyboardAwareScrollView
    style={[{width:Window.width},style]}
    contentContainerStyle={[Styles.mainView,style]}
    scrollEnabled={false}
    >
    {children}
    </KeyboardAwareScrollView>
    </Pressable>
}