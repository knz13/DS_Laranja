

import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";
import {TelaPrincipalMestre} from '../TelaDeJogo/TelaPrincipalMestre'
import { useNavigation } from "@react-navigation/native";





export const TelaDeAventuras = () => { 

    const [salas,setSalas] = useState(null as Array<string>);
    const [timeoutMounted,setTimeoutMounted] = useState(false);
    const [shouldShowCreationPopup,setShowCreationPopup] = useState(false);
    const [shouldGoBack,setShouldGoBack] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
   
    const global = useContext(GlobalContext)
    const navigation = useNavigation();

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
                    if(json['state'] == 'success'){
                        console.log('setting salas!')
                        setSalas(JSON.parse(json['message']));
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
        return <PageButton style={{margin:2,backgroundColor:AppColors.azul_escuro_extra,borderWidth:2,borderColor:AppColors.azul,borderRadius:10}} textRender={(() => {
                return <View style={{width:'100%'}}>
                <Text style={{color:AppColors.white,margin:10,textAlign:'center',right: 0,position:'absolute'}}>{item.number_of_players == null? 0 : item.number_of_players}</Text>
                <Text style={{color:AppColors.white,margin:10,textAlign:'center'}}>{item}</Text>
                </View>
            })()} title={item}>
                <TelaPrincipalMestre></TelaPrincipalMestre>
            </PageButton>
    }

    if(salas?.valueOf() == null){
        console.log('get salas!')
        getSalas()
    }
    return <MainView>
        <FlatList style={{width:'80%',paddingTop:'20%'}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:200}} data={salas? Object.keys(salas) : []} renderItem={renderItem}></FlatList>
        <PageButton
        title={'ADICIONAR'} 
        textStyle={{fontSize:20}}
        style={{alignSelf:'center',width:'50%',bottom:Window.height/15,borderRadius:15,backgroundColor:AppColors.azul}}
        mainViewStyle={{alignItems:'center',justifyContent:'center'}}
        shouldGoBack={shouldGoBack}
        onPress={() => {
            navigation.navigate("Aventuras/Adicao")
        }}
        >
        </PageButton>
    </MainView>
}