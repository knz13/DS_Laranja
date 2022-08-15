import React from "react"
import { TextInput, View,Text, StyleProp, TextStyle } from "react-native"
import { AppColors } from "../styles"





interface TextInputInterface {
    title?: string,
    titleStyle?:StyleProp<TextStyle>,
    onChangeText?: (text:string) => void
}

export const MainTextInput = ({onChangeText,title,titleStyle}:TextInputInterface) => {
    return <>
    {title && <View style={{alignSelf:'center'}}>
        <Text style={[{color:AppColors.laranja_radioativo},titleStyle]}>{title}</Text>
    </View>}
    <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.marrom}}>
        <TextInput onChangeText={onChangeText} style={{margin:'3%',color:AppColors.white}}></TextInput>
    </View>
            </>
}