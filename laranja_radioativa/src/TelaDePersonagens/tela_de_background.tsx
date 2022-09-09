import React, { useContext, useRef, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PopupCard } from "../components/PopupCard"
import { AlertPopup } from "../components/AlertPopup"
import { useNavigation } from "@react-navigation/native"





export const TelaDeBackground = () => {

    const navigation = useNavigation();
    const UselessTextInputMultiline = () => {
        const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    }
    const UselessTextInput = () => {
        const [text, onChangeText] = React.useState("Useless Text");
        const [number, onChangeNumber] = React.useState(null);
    }    

    return <MainView>
        <View style={{width:Window.width/1.3,height:Window.height/1.3}}>

        <PageButton 
        title="?" 
        style= {{width:'20%',height:'10%',marginBottom:'5%',alignItems:'center'}}
        onPress={() => {
            navigation.navigate('Personagens/Criacao/Background/Instrucoes')
        }}>
        </PageButton>

        <MainTextInput 
        title="Background" 
        textInputProps={{keyboardType:'default',multiline:true}} 
        textStyle={{textAlign:'center'}} 
        ></MainTextInput>

        </View>
    </MainView>
}
