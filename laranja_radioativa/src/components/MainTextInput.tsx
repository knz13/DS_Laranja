import React from "react"
import { TextInput, View,Text, StyleProp, TextStyle, TextInputProps } from "react-native"
import { AppColors } from "../styles"



interface TextInputInterface {
    title?: string,
    titleStyle?:StyleProp<TextStyle>,
    onChangeText?: (text:string) => void,
    textInputProps?: TextInputProps,
    textStyle?:StyleProp<TextStyle> 
}

export const MainTextInput = ({onChangeText,title,titleStyle,textInputProps,textStyle}:TextInputInterface) => {
    return <>
    {title && <View style={{alignSelf:'center'}}>
        <Text style={[{color:AppColors.laranja_radioativo},titleStyle]}>{title}</Text>
    </View>}
    <View style={{borderWidth:1,margin:'3%',borderColor:AppColors.marrom}}>
        <TextInput onChangeText={onChangeText} style={[{margin:'3%',color:AppColors.white},textStyle]} {...textInputProps}></TextInput>
    </View>
    </>
}