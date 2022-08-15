

import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";






export const TelaDeAventuras = () => { 

    const [salas,setSalas] = useState([]);
    const [timeoutMounted,setTimeoutMounted] = useState(false);
    const [shouldShowCreationPopup,setShowCreationPopup] = useState(false);
    const global = useContext(GlobalContext)

    useEffect(() => {
        const timeout = setInterval(() => {
            const promise = fetch('https://dnd-party.herokuapp.com/database/rooms',{
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                    'x-access-token':global.token
                },
                method:'GET'
            })
    
            promise.then(response => response.json()).then(json => {
                try {
                    if(json['message']['rooms']){
                        if(salas != JSON.parse(json['message']['rooms'])){
                            console.log(`salas = ${JSON.stringify(JSON.parse(json['message'])['rooms'])}`)
                            setSalas(JSON.parse(json['message'])['rooms']);
                        }
                    }
                    else {
                    }
                } catch(err) {
                    console.log(err);
                }
            });
    
            promise.catch(err => {
                console.log("err => " + JSON.stringify(err))
            })
        
        },3000);
        
        return () => window.clearInterval(timeout)

    },[])

    return <MainView>
        <FlatList style={{width:'80%'}} data={[salas]} renderItem={({item}) => <View>
            <Text>{item}</Text>
        </View>}></FlatList>
        <PageButton 
        onPress={() => {

        }}
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',flex:1,position:'absolute',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.laranja_radioativo}}
        >
            <MainTextInput title={'Nome da Sala'}></MainTextInput>
            <PageButton title={'Criar'}  style={{alignSelf:'center'}}></PageButton>
        </PageButton>
        
    </MainView>
}