import {Props, Window} from "../geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { NavigationContainer, NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { TelaDeCriacaoDePersonagens } from "./tela_de_criacao_de_personagens";





export const PersonagemContext = React.createContext({classe:'',race:'',atributos:''});
export const DadosSobrePersonagemContext = React.createContext({classes:[] as Array<any>,racas:[] as Array<any>});


export const TelaDePersonagens = () => {
    const [dados,setDados] = useState([]);
    const navigation = useNavigation();
    const [id,setId] = useState(-1);

    

    const renderItem = ({item}) => {
        // renderizar personagem
        return <View></View>
    }

    return <DadosSobrePersonagemContext.Provider>
    <PersonagemContext.Provider value={{classe:'',race:'',atributos:''}}>
        <MainView>
        <FlatList style={{width:'80%'}} data={dados} renderItem={renderItem}></FlatList>
        <PageButton 
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{bottom:Window.height/15,width:'50%'}}
        onPress={() => {
            navigation.navigate('Personagens/Criacao')
        }}>
        </PageButton>
    </MainView>
    </PersonagemContext.Provider>
    </DadosSobrePersonagemContext.Provider>
}


