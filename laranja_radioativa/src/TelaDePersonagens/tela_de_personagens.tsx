import {GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useEffect, useContext } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList, DatePickerIOS } from 'react-native';
import { AppColors, Styles } from "../styles";
import { NavigationContainer, NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { TelaDeCriacaoDePersonagens } from "./tela_de_criacao_de_personagens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



export const GerarDadosPersonagem = () => {
    return {id_do_personagem:'',classe:'',race:'',atributos:{forca:'10',destreza:'10',constituicao:'10',sabedoria:'10',carisma:'10',inteligencia:'10'},nome:'',skills:'',background:''}
}

<<<<<<< Updated upstream
export const PersonagemContext = React.createContext(GerarDadosPersonagem());
=======

export const PersonagemContext = React.createContext({id_do_personagem:'',classe:'',race:'',atributos:{forca:'0',destreza:'0',constituicao:'0',sabedoria:'0',carisma:'0',inteligencia:'0'},nome:'',skills:'',background:'',nivel:'1'});
>>>>>>> Stashed changes
export const DadosSobrePersonagemContext = React.createContext({classes:[] as Array<any>,racas:[] as Array<any>});


export const TelaDePersonagens = (props: NativeStackScreenProps<{}>) => {
    const [dados,setDados] = useState([]);
    const [dadosSet,setDadosSet] = useState(false);
    const navigation = useNavigation();
    const [id,setId] = useState(-1);
    const global = useContext(GlobalContext);
    const personagem = useContext(PersonagemContext);

    
    const renderItem = ({item}) => {
        // renderizar personagem
        return <PageButton title={item.character_name} onPress={() => {
            console.log(JSON.stringify(item))
            personagem.id_do_personagem = item.character_id;
            personagem.nome = item.character_name;
            personagem.classe = item.class;
            personagem.race = item.race;
            const atributos = item.attributes.split(' ');
            personagem.atributos.forca = atributos[0]
            personagem.atributos.destreza = atributos[1]
            personagem.atributos.constituicao = atributos[2]
            personagem.atributos.inteligencia = atributos[3]
            personagem.atributos.sabedoria = atributos[4]
            personagem.atributos.carisma = atributos[5]
            navigation.navigate('Personagens/Criacao')
        }}></PageButton>
    }

    useEffect(() => {
        if(!dadosSet){
            fetch('https://dnd-party.herokuapp.com/database/character',{
                method:'GET',
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                setDados(JSON.parse(json['message']))
                setDadosSet(true);
            })
        }
    })

    return <DadosSobrePersonagemContext.Provider value={{classes:null,racas:null}}>
    
        <MainView>
        <FlatList  style={{width:'80%'}} contentContainerStyle={{paddingTop:'20%'}} data={dados} renderItem={renderItem}></FlatList>
        <PageButton 
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{bottom:Window.height/15,width:'50%'}}
        onPress={() => {
            navigation.navigate('Personagens/Criacao')
        }}>
        </PageButton>
    </MainView>
    </DadosSobrePersonagemContext.Provider>
}


