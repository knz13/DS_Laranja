import {GlobalContext, Props, useUpdate, Window} from "../geral";
import React, { useState,Component, useEffect, useContext } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList, DatePickerIOS } from 'react-native';
import { AppColors, Styles } from "../styles";
import { NavigationContainer, NavigationProp, StackActions, useIsFocused, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { TelaDeCriacaoDePersonagens } from "./tela_de_criacao_de_personagens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



export const GerarDadosPersonagem = () => {
    return {
        id_do_personagem:'',
        classe:'',
        race:'',
        atributos:{
            forca:'10',
            destreza:'10',
            constituicao:'10',
            sabedoria:'10',
            carisma:'10',
            inteligencia:'10'
        },
        nome:'',
        skills:'',
        background:'',
        nivel:'1',
        pericias:{
            acrobacia:'10',
            arcanismo:'10',
            atletismo:'10',
            atuacao:'10',
            enganacao:'10',
            furtividade:'10',
            historia:'10',
            intimidacao:'10',
            intuicao:'10',
            investigacao:'10',
            lidarComAnimais:'10',
            medicina:'10',
            natureza:'10',
            percepcao:'10',
            persuasao:'10',
            prestidigitacao:'10',
            religiao:'10',
            sobrevivencia:'10'
        }
    }
}

export const PersonagemContext = React.createContext(GerarDadosPersonagem());
export const DadosSobrePersonagemContext = React.createContext({classes:[] as Array<any>,racas:[] as Array<any>});


export const TelaDePersonagens = (props: NativeStackScreenProps<{}>) => {
    const [dados,setDados] = useState([]);
    const [dadosSet,setDadosSet] = useState(false);
    const navigation = useNavigation();
    const [id,setId] = useState(-1);
    const global = useContext(GlobalContext);
    let personagem = useContext(PersonagemContext);
    const isFocused = useIsFocused();

    const renderItem = ({item}) => {
        // renderizar personagem
        return <PageButton title={item.nome} onPress={() => {
            Object.assign(personagem,item);
            console.log(JSON.stringify(personagem))
            
            navigation.navigate('Personagens/Criacao')
        }}></PageButton>
    }

    useEffect(() => {
        if(isFocused){
            fetch('https://dnd-party.herokuapp.com/database/character',{
                method:'GET',
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                setDados(JSON.parse(json['message']))
            })
        }

        
    },[isFocused])

    return <DadosSobrePersonagemContext.Provider value={{classes:null,racas:null}}>
        <MainView>
        <FlatList  style={{width:'80%'}} contentContainerStyle={{paddingTop:'20%'}} data={dados} renderItem={renderItem}></FlatList>
        <PageButton 
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{bottom:Window.height/15,width:'50%'}}
        onPress={() => {
            Object.assign(personagem,GerarDadosPersonagem())
            navigation.navigate('Personagens/Criacao')
        }}>
        </PageButton>
    </MainView>
    </DadosSobrePersonagemContext.Provider>
}


