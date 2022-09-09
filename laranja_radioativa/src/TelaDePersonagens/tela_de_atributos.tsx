import React, { useContext, useEffect, useRef, useState } from "react"
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
    const [forca,setForca] = useState(parseInt(personagem.atributos.forca));
    const [destreza,setDest] = useState(parseInt(personagem.atributos.destreza));
    const [constituicao,setConst] = useState(parseInt(personagem.atributos.constituicao));
    const [inteligencia,setInt] = useState(parseInt(personagem.atributos.inteligencia));
    const [sabedoria,setSab] = useState(parseInt(personagem.atributos.sabedoria));
    const [carisma,setCaris] = useState(parseInt(personagem.atributos.carisma));

    useEffect(() => {

        personagem.atributos.forca = forca.toString();
        personagem.atributos.destreza = destreza.toString();
        personagem.atributos.constituicao = constituicao.toString();
        personagem.atributos.inteligencia =inteligencia.toString();
        personagem.atributos.sabedoria = sabedoria.toString();
        personagem.atributos.carisma = carisma.toString();

    },[forca,destreza,constituicao,inteligencia,sabedoria,carisma]);


    const renderItem = (title:string,func:(text:string) => void,value:number) => {
        return <MainTextInput title={`${title} (${value != NaN? `${(value - 10)/2 >= 0? '+' : ''}${Math.floor((value - 10)/2)}` : ''})`} textInputProps={{keyboardType:'numeric',defaultValue:value.toString() != 'NaN'? value.toString() : ''}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
                if(func){
                    func(text)
                }
            }}></MainTextInput>
            
            
    }

    return <MainView>
        <View style={{width:Window.width/1.8}}>
        <PageButton 
        title="?" 
        style= {{width:'25%',height:'10%',marginBottom:'5%',alignItems:'center'}}
        onPress={() => {
            navigation.navigate('Personagens/Criacao/Atributos/Instrucoes')
        }}>
        </PageButton>
        

        {renderItem('Força',text => setForca(parseInt(text)),forca)}
        {renderItem('Destreza',text => setDest(parseInt(text)),destreza)}
        {renderItem('Constituição',text => setConst(parseInt(text)),constituicao)}
        {renderItem('Inteligência',text => setInt(parseInt(text)),inteligencia)}
        {renderItem('Sabedoria',text => setSab(parseInt(text)),sabedoria)}
        {renderItem('Carisma',text => setCaris(parseInt(text)),carisma)}
        
        </View>
    </MainView>
}