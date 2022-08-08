import {DBContext, Hash, Props, Window} from "../geral";
import React, { useState,Component, useContext, useRef } from 'react';
import { Image,StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { AppColors, Styles } from "../styles";
import * as Crypto from 'crypto-js/sha256';
import { Accordion } from "./../components/accordion";
import { PopupCard } from "./../components/PopupCard";
import { runOnJS, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { AlertPopup } from "./../components/AlertPopup";

interface TextInputInterface {
    onChangeText?: (arg0:string) => void
}

interface TelaDeCadastroInterface {
    onConfirm?: (message:string) => void,
    onLeave?: () => void
}

export const TelaDeCadastro = ({onConfirm,onLeave} : TelaDeCadastroInterface) => {

    let email = useRef('').current;
    let senha = useRef('').current;
    let username = useRef('').current
    const [alertPopupVisibility,setAlertPopupVisibility] = useState(false);
    const [alertPopupText,setAlertPopupText] = useState('');
    const [loading,setLoading] = useState(false);
    



    const MyTextInput = ({onChangeText} : TextInputInterface) => {
        return <View style={{borderWidth:5,margin:'5%',width:'70%',borderColor:AppColors.marrom}}>
                <TextInput onChangeText={onChangeText? onChangeText : () => {}} style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
    }

    return <View style={{backgroundColor:AppColors.laranja_radioativo,borderRadius:10,alignItems:'center'}}>
        <View style={{height:'20%'}}></View>
        <Text>Insira o nome de Usuário</Text>
        <MyTextInput  onChangeText={(text) => {
            username = text;
        }}></MyTextInput>
        <Text>Insira seu email</Text>
        <MyTextInput  onChangeText={(text) => {
            email = text
        }}></MyTextInput>
        <Text>Insira a senha</Text>
        <MyTextInput onChangeText={(text) => {
            senha = text;
        }}></MyTextInput>
        <ActivityIndicator animating={loading}></ActivityIndicator>
        <TouchableOpacity onPress={() => {
            if(email.length == 0){
                alert('Por favor preencha o email.');
                return;
            }
            if(username.length == 0){
                alert('Por favor preencha o nome de usuário')
                return;
            }
            if(senha.length == 0){
                alert("Por favor preencha a senha");
                return;
            }
            console.log(`username ${username}, senha ${senha}, email ${email}`)
            setLoading(true);
            Hash(senha).then(hashedPassword => {
            fetch('https://dnd-party.herokuapp.com/database/users',{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    user_name: username,
                    user_password_hash: hashedPassword,
                    email: email
                })
            }).then((response) => {
                response.json().then(json => {
                    setLoading(false);
                    if(json['state'] == 'success'){
                        if(onConfirm){
                            onConfirm(json['message']);
                        }
                    }
                })
            }).catch((err) => {
                console.log(JSON.stringify(err))
            });
            })
        }}>
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',marginHorizontal:'10%',marginVertical:'2%',fontSize:18}}>Cadastrar</Text>
            </View>
        </TouchableOpacity>
        <View style={{height:'10%'}}></View>
    </View>
}