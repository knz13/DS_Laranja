

import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";






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

    if(salas?.valueOf() == null){
        console.log('get salas!')
        getSalas()
    }
    return <MainView>
        <FlatList style={{width:'80%',paddingTop:'20%'}} data={salas} renderItem={({item}) => <View>
            <View style={{borderRadius:15,borderWidth:1,borderColor:AppColors.laranja_radioativo}}>
                <Text style={{color:AppColors.laranja_radioativo}}>{item.room_name}</Text>
            </View>
        </View>}></FlatList>
        <PageButton
        title={'Adicionar'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.laranja_radioativo}}
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