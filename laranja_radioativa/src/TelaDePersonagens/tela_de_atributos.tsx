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





export const TelaDeAtributos = () => {

    const [atributos,setAtributos] = useState([] as Array<any>)
    const navigation = useNavigation();

    let forca = useRef('').current;
    let destreza = useRef('').current;
    let constituicao = useRef('').current;
    let inteligencia = useRef('').current;
    let sabedoria = useRef('').current;
    let carisma = useRef('').current;

    return <MainView>
        <View style={{width:Window.width/1.8}}>

        <PageButton 
        title="?" 
        style= {{width:'25%',height:'10%',marginBottom:'5%',alignItems:'center'}}
        onPress={() => {
            navigation.navigate('Personagens/Criacao/Atributos/Instrucoes')
        }}>
        </PageButton>
        
        <MainTextInput title="Força" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            forca = text;
            console.log(forca);
        }}></MainTextInput>

        <MainTextInput title="Destreza" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            destreza = text;
            console.log(destreza);
        }}></MainTextInput>
        
        <MainTextInput title="Constituição" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            constituicao = text;
            console.log(constituicao);
        }}></MainTextInput>
        
        <MainTextInput title="Inteligência" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            inteligencia = text;
            console.log(inteligencia);
        }}></MainTextInput>

        <MainTextInput title="Sabedoria" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            sabedoria = text;
            console.log(sabedoria);
        }}></MainTextInput>
        
        <MainTextInput title="Carisma" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            carisma = text;
            console.log(carisma);
        }}></MainTextInput>

        </View>
    </MainView>
}