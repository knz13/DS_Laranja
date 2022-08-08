

import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";






export const TelaDeAventuras = () => { 

    const [salas,setSalas] = useState([])
    const global = useContext(GlobalContext)

    useEffect(() => {
        fetch('https://dnd-party.herokuapp.com/database/rooms',{
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                'x-access-token':global.token
            },
            method:'GET'
        }).then(response => response.json().then(json => {
            console.log(`salas = ${JSON.stringify(JSON.parse(json['message'])['rooms'])}`)
            setSalas(JSON.parse(json['message'])['rooms']);
        })).catch(err => {
            console.log(JSON.stringify(err))
        })
    },[])

    return <MainView>
        <FlatList style={{width:'80%'}} data={[salas]} renderItem={({item}) => <View>
            <Text>{item}</Text>
        </View>}></FlatList>
        <PageButton 
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',flex:1,position:'absolute',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.laranja_radioativo}}
        >
            <PageButton title='hello!'></PageButton>
        </PageButton>
    </MainView>
}