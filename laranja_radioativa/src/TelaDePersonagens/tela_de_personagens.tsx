import {Props, Window} from "../geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, SectionList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { NavigationContainer, NavigationProp, StackActions, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { TelaDeCriacaoDePersonagens } from "./tela_de_criacao_de_personagens";







export const TelaDePersonagens = () => {
    const [dados,setDados] = useState([]);
    const navigation = useNavigation();

    const renderItem = ({item}) => {
        // renderizar personagem

        return <View></View>
    }

    return <MainView>
        <FlatList style={{width:'80%'}} data={dados} renderItem={renderItem}></FlatList>
        <PageButton 
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',flex:1,position:'absolute',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.laranja_radioativo}}
        >
            <TelaDeCriacaoDePersonagens></TelaDeCriacaoDePersonagens>
        </PageButton>
    </MainView>
}


