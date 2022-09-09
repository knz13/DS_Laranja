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
import { PersonagemContext } from "./tela_de_personagens"





export const TelaDeAtributos = () => {

    
    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);

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
            personagem.atributos.forca = text;
        }}></MainTextInput>

        <MainTextInput title="Destreza" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            personagem.atributos.destreza = text;
        }}></MainTextInput>
        
        <MainTextInput title="Constituição" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            personagem.atributos.constituicao = text;
        }}></MainTextInput>
        
        <MainTextInput title="Inteligência" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            personagem.atributos.inteligencia = text;
        }}></MainTextInput>

        <MainTextInput title="Sabedoria" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            personagem.atributos.sabedoria = text;
        }}></MainTextInput>
        
        <MainTextInput title="Carisma" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            personagem.atributos.carisma = text;
        }}></MainTextInput>
        </View>
    </MainView>
}