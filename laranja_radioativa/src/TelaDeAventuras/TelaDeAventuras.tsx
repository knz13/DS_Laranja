

import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";
import {TelaPrincipalMestre} from '../TelaDeJogo/TelaPrincipalMestre'





export const TelaDeAventuras = () => { 

    const [salas,setSalas] = useState(null as Array<string>);
    const [timeoutMounted,setTimeoutMounted] = useState(false);
    const [shouldShowCreationPopup,setShowCreationPopup] = useState(false);
    const [shouldGoBack,setShouldGoBack] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
    let roomName = useRef('').current
    const global = useContext(GlobalContext)

    const getSalas = () => {
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
                    console.log(json['message'])
                    if(JSON.parse(json['message'])['rooms']){
                        console.log('setting salas!')
                        setSalas(JSON.parse(json['message'])['rooms']);
                    }
                    else {
                        console.log(json['message'])
                    }
                } catch(err) {
                    console.log(err);
                }
            });
    
            promise.catch(err => {
                console.log("err => " + JSON.stringify(err))
            })
    }

    const renderItem = ({item}) => {
        return <PageButton style={{margin:2,backgroundColor:AppColors.azul_escuro_extra,borderWidth:2,borderColor:AppColors.azul}} textRender={(() => {
                return <View style={{width:'100%'}}>
                <Text style={{color:AppColors.white,margin:10,textAlign:'center',right: 0,position:'absolute'}}>{item.number_of_players == null? 0 : item.number_of_players}</Text>
                <Text style={{color:AppColors.white,margin:10,textAlign:'center'}}>{item.room_name}</Text>
                </View>
            })()} title={item.room_name}>
                <TelaPrincipalMestre></TelaPrincipalMestre>
            </PageButton>
    }

    if(salas?.valueOf() == null){
        console.log('get salas!')
        getSalas()
    }
    return <MainView>
        <FlatList style={{width:'80%',paddingTop:'20%'}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}} data={salas} renderItem={renderItem}></FlatList>
        <PageButton
        title={'ADICIONAR'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',width:'50%',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.azul}}
        mainViewStyle={{alignItems:'center',justifyContent:'center'}}
        shouldGoBack={shouldGoBack}
        >
            <View style={{width:'100%'}}>
                <View style={{height:'40%'}}></View>
                <MainTextInput title={'Nome da Sala'} onChangeText={(text) => roomName = text}></MainTextInput>
                <PageButton title={'Criar'} onPress={() => {
                    fetch('https://dnd-party.herokuapp.com/database/rooms',{
                        method:'POST',
                        headers:{
                            Accept:'application/json',
                            'Content-Type':'application/json',
                            'x-access-token':global.token
                        },
                        body:JSON.stringify({room_name:roomName})
                    }).then((res) => res.json()).then((json) => {
                        if(json['state'] == 'success'){
                            alert('room created!')
                            getSalas()
                            setShouldGoBack(false)
                            setShouldGoBack(true)
                        }
                        else {
                            alert(json['message'])
                        }
                    })
                }} style={{alignSelf:'center'}}></PageButton>
            </View>
        </PageButton>
    </MainView>
}