import React, { useContext, useEffect, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PersonagemContext } from "./tela_de_personagens"
import { useNavigation } from "@react-navigation/native"





export const TelaInfoSecundaria = () => {

    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);
    const [classeDeArmadura,setClasseDeArmadura] = useState(parseInt(personagem.infoSec.classeDeArmadura));
    const [iniciativa,setIniciativa] = useState(parseInt(personagem.infoSec.iniciativa));
    const [deslocamento,setDeslocamento] = useState(parseInt(personagem.infoSec.deslocamento));
    const [pvAtuais,setPvAtuais] = useState(parseInt(personagem.infoSec.pvAtuais));
    const [pvTemporarios,setPvTemporarios] = useState(parseInt(personagem.infoSec.pvTemporarios));
    const [inspiracao,setInspiracao] = useState(parseInt(personagem.infoSec.inspiracao));

    useEffect(() => {

        personagem.infoSec.classeDeArmadura = classeDeArmadura.toString();
        personagem.infoSec.iniciativa = iniciativa.toString();
        personagem.infoSec.deslocamento = deslocamento.toString();
        personagem.infoSec.pvAtuais = pvAtuais.toString();
        personagem.infoSec.pvTemporarios = pvTemporarios.toString();
        personagem.infoSec.inspiracao = inspiracao.toString();

    },[classeDeArmadura,iniciativa,deslocamento,pvAtuais,pvTemporarios,inspiracao]);


    const renderItem = (title:string,func:(text:string) => void,value:number) => {
        return <MainTextInput title={`${title}`} textInputProps={{keyboardType:'numeric',defaultValue:value.toString() != 'NaN'? value.toString() : ''}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
                if(func){
                    func(text)
                }
            }}></MainTextInput>
            
            
    }

    return <MainView>

        <View style={{width:Window.width/1.5,alignItems:'center'}}>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('Classe de Armadura',text => setClasseDeArmadura(parseInt(text)),classeDeArmadura)}
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('Iniciativa',text => setIniciativa(parseInt(text)),iniciativa)}
            </View>       

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('Deslocamento',text => setDeslocamento(parseInt(text)),deslocamento)}
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('PV Atuais',text => setPvAtuais(parseInt(text)),pvAtuais)}
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('PV Temporários',text => setPvTemporarios(parseInt(text)),pvTemporarios)}
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                {renderItem('Inspiração',text => setInspiracao(parseInt(text)),inspiracao)}
            </View>

        </View>

    </MainView>

}