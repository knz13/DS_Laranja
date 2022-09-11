import React, { useContext, useEffect, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { useNavigation } from "@react-navigation/native"
import { MainTextInput } from "../components/MainTextInput"
import { PersonagemContext } from "./tela_de_personagens"



// nao esta funcionando socorro 

export const TelaInfoAdicional = () => {
    
    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);
    const [personalidade,setPersonalidade] = useState(personagem.personalidade);
    const [ideais,setIdeais] = useState(personagem.ideais);
    const [ligacoes,setLigacoes] = useState(personagem.ligacoes);
    const [defeitos,setDefeitos] = useState(personagem.defeitos);
    const [aparencia,setAparencia] = useState(personagem.aparencia);
    const [aliadosOrganizacoes,setALiadosOrganizacoes] = useState(personagem.aliadosOrganizacoes);
    const [adicionais,setAdicionais] = useState(personagem.adicionais);

    const UselessTextInputMultiline = () => {
        const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    }
    const UselessTextInput = () => {
        const [text, onChangeText] = React.useState("Useless Text");
        const [number, onChangeNumber] = React.useState(null);
    }    

    useEffect(() => {

        personagem.personalidade = personalidade;
        personagem.ideais = ideais;
        personagem.ligacoes = ligacoes;
        personagem.defeitos = defeitos;
        personagem.aparencia = aparencia;
        personagem.aliadosOrganizacoes = aliadosOrganizacoes;
        personagem.adicionais = adicionais;

        
    },[personalidade,ideais,ligacoes,defeitos,aparencia,aliadosOrganizacoes,adicionais]);

    return <MainView>

    <ScrollView>

        <View style={{width:Window.width/1.5,alignItems:'center'}}>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Traços de Personalidade" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:personalidade}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
            setPersonalidade(text)
            }}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Ideais" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:ideais}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setIdeais(text)
            }}>
            </MainTextInput>
        </View>       

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Ligações" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:ligacoes}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setLigacoes(text)
            }}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Defeitos" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:defeitos}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setDefeitos(text)
            }}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Aparência do Personagem" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:aparencia}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setAparencia(text)
            }}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Aliados e Organizações" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:aliadosOrganizacoes}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setALiadosOrganizacoes(text)
            }}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Informações Adicionais/Outros" 
            textInputProps={{keyboardType:'default',multiline:true,defaultValue:adicionais}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}
            onChangeText={(text) => {
                setAdicionais(text)
            }}>
            </MainTextInput>
        </View>

        </View>

    </ScrollView>
    
    </MainView>
}