import {DBContext, GlobalContext, Hash, Props, Window} from "../geral";
import React, { useState,Component, useContext, useRef } from 'react';
import { Image,StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import * as Crypto from 'crypto-js/sha256';
import { Accordion } from "./../components/accordion";
import { PopupCard } from "./../components/PopupCard";
import { runOnJS, useAnimatedGestureHandler, useAnimatedScrollHandler } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { TelaDeCadastro } from "./tela_de_cadastro";
import { MainView } from "./../components/MainView";
import Beholder from './../components/beholder'
import * as Filesystem from 'expo-file-system';


export const TelaDeLogin = () => {
    let login = useRef('').current;
    let senha = useRef('').current
    const navigation = useNavigation();
    const [myToken,setMyToken] = useState('');
    const global = useContext(GlobalContext);
    global.token = myToken;
    const [response,setResponse] = useState('');
    const [classes,setClasses] = useState([]);
    const db = useContext(DBContext);
    const [visible,setVisibility] = useState(false);

    const style = StyleSheet.create({   
        all: {
            margin:12,
            padding:10,
            borderRadius:1,
            borderWidth:1,
            width:'60%'
        }
    })

    Filesystem.readAsStringAsync(Filesystem.documentDirectory + 'text.txt').then(content => {
        console.log(`logging in with token => ${content}`)
        fetch('https://dnd-party.herokuapp.com/database/login',{
                    method:"POST",
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                        'x-access-token':content
                    }
                }).then(res => res.json().then(json => {
                    if(json['state'] == 'success'){
                        console.log('logged in successfully')
                        setMyToken(json['token']);
                        navigation.navigate('Main');
                    }
                    else {
                        alert(json['message']);
                    }
        }))
    })

    const MyTextInput = ({onChangeText}) => {
        return <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.marrom}}>
                <TextInput onChangeText={onChangeText} style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
    }


    return <>
    <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
    <MainView>
        <View style={{width:'40%',height:'40%'}}>
            <Beholder style={{}}></Beholder>
        </View>
        <Text style={{color:AppColors.laranja_radioativo}}>Nome de Usuário</Text>
        <MyTextInput onChangeText={(text) => {
            login = text;
        }}></MyTextInput>
        <Text style={{color:AppColors.laranja_radioativo}}>Senha</Text>
        <MyTextInput onChangeText={text => {
            senha = text;
        }}></MyTextInput>
        <TouchableOpacity onPress={() => {
            if(login.length == 0){
                alert('Please insert an username');
                return;
            }
            if(senha.length == 0){
                alert('Please insert your password');
                return;
            }
            Hash(senha).then(hashedPassword => {
                fetch('https://dnd-party.herokuapp.com/database/login',{
                    method:"POST",
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        user_name: login,
                        user_password_hash: hashedPassword,
                    })
                }).then(res => res.json().then(json => {
                    if(json['state'] == 'success'){
                        setMyToken(json['token']);

                        Filesystem.writeAsStringAsync(Filesystem.documentDirectory + 'text.txt',json['token']).then(() => {
                            console.log('written token to file!');
                        });


                        navigation.navigate('Main');
                    }
                    else {
                        alert(json['message']);
                    }
                })).catch(err => {
                    console.log(`error when loggin in => ${JSON.stringify(err)}`)
                })
            })

        }}>
            <View style={{backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',marginHorizontal:'10%',marginVertical:'2%',fontSize:20}}>Log in</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginVertical:'3%',color:AppColors.laranja_radioativo}}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => {
                setVisibility(true)
            }}>
                <Text style={{color:'blue'}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    </MainView>
    </Pressable>
    <PopupCard contentContainerStyle={{backgroundColor:AppColors.laranja_radioativo}} paddingTop={'15%'}  visible={visible} onExit={() => {
        setVisibility(false)
    }}>
        <TelaDeCadastro onConfirm={(text) => {
            setVisibility(false);
            alert(text);
        }}></TelaDeCadastro>
    </PopupCard>
    </>

}
