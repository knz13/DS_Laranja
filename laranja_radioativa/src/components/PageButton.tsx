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
    return <CreationButton style={[{backgroundColor:AppColors.laranja_radioativo},style]} textStyle={[{fontFamily:'exo',marginVertical:'5%',marginHorizontal:'5%',fontSize:17},textStyle]} onPress={onPress} title={title}>
        <MainView>
            {children}
        </MainView>
    </CreationButton>
}