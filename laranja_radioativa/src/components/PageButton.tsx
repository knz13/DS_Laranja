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
    return <CreationButton style={[{backgroundColor:AppColors.laranja_radioativo},style]} backButtonStyle={{borderWidth:5,borderColor:AppColors.marrom}} textStyle={[{fontFamily:'exo',marginVertical:'2%',marginHorizontal:'5%',fontSize:17},textStyle]} onPress={onPress} title={title}>{children && <MainView>
            {children}
        </MainView>}</CreationButton>
}