import React from "react"
import { TextInput, View,Text, StyleProp, TextStyle } from "react-native"
import { AppColors } from "../styles"





interface TextInputInterface {
    title?: string,
    titleStyle?:StyleProp<TextStyle>,
    onChangeText?: (text:string) => void
}


export const MainTextInput = ({onChangeText,title,titleStyle,textInputProps}:TextInputInterface) => {
    return <View style={{width:'100%'}}>
    {title && <View style={{alignSelf:'center'}}>
        <Text style={[{color:AppColors.laranja_radioativo},titleStyle]}>{title}</Text>
    </View>}
    <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.marrom,alignSelf:'center'}}>
        <TextInput onChangeText={onChangeText} style={{margin:'3%',color:AppColors.white}} {...textInputProps}></TextInput>
    </View>
    </View>

}