import React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { AppColors } from "../styles"
import { CreationButton } from "./CreationButton"
import { MainView } from "./MainView"





interface PageButtonInterface {
    title:string,
    children?:React.ReactNode,
    textStyle?:StyleProp<TextStyle>,
    style?:StyleProp<ViewStyle>,
    onPress?: () => void
}

export const PageButton = ({title,children,textStyle,style,onPress}:PageButtonInterface) => {
    return <CreationButton style={[{backgroundColor:AppColors.laranja_radioativo,borderRadius:15},style]} backButtonStyle={{borderWidth:5,borderColor:AppColors.marrom}} textStyle={[{fontFamily:'exo',fontSize:17},textStyle]} onPress={onPress} title={title}>{children && <MainView>
            {children}
        </MainView>}</CreationButton>
}