



import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";
import Logout from './../components/logout'
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Chest from '../components/chest'
import Edit from '../components/editing'
import { PersonagemContext } from "../TelaDePersonagens/tela_de_personagens";


export const TelaPrincipalMestre = (props : NativeStackScreenProps<{}>) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const global = useContext(GlobalContext);
    let personagem = useContext(PersonagemContext);
    const [personagens,setPersonagens] = useState([]);
    useEffect(() => {
        if(isFocused){
            fetch(`https://dnd-party.herokuapp.com/database/room/${props.route.params.room_id}`,{
                method:"GET",
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                
                setPersonagens(JSON.parse(json['message']))
            })
        }
    },[isFocused])
    
    
    const RenderItem = ({item}) => {
        return  <View style={{alignItems:'center'}}>
            <PageButton disabled title={`${item.nome}`} style={{margin:'3%',borderWidth:10,borderColor:AppColors.azul,backgroundColor:AppColors.azul_escuro_extra}}>
                <View style={{position:'absolute',left:25,height:'100%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <Text style={{fontFamily:'inter',fontSize:20,paddingRight:20,color:'white'}}>{item.nivel}</Text>
                    <View style={{backgroundColor:'white',height:'100%',width:5}}></View>
                </View>
                <View style={{marginVertical:15}}>
                <Text style={{alignSelf:'center',fontFamily:'inter',color:'white',opacity:0.9}}>classe: {item.classe}</Text>
                <Text style={{alignSelf:'center',fontFamily:'inter',color:'white',opacity:0.9}}>raça: {item.race}</Text>
                </View>
                <View style={{backgroundColor:'white',width:5,position:'absolute',right:60,height:'100%'}}></View>
                <View style={{right:0,position:'absolute',alignItems:'center',height:'100%'}}>
                    <TouchableOpacity style={{width:50,height:'50%',alignSelf:'center'}} onPress={() => {
                        //TODO
                    }}>
                    <View style={{width:'100%',alignSelf:'center'}}>
                        <Chest fill={'white'}></Chest>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'100%',height:'50%',alignSelf:'center'}} onPress={() => {
                        Object.assign(personagem,item)
                        navigation.navigate('Personagens/Criacao')
                    }}>
                    <View style={{width:'100%'}}>
                        <Edit fill={'none'} stroke={'white'}></Edit>
                    </View>
                    </TouchableOpacity>
                </View>
            </PageButton>
        </View>
    }

    return <MainView style={{}}>
    <View style={{alignItems:'center',width:'100%'}}>
    <FlatList style={{width:'70%'}} contentContainerStyle={{height:Window.height/2}} data={personagens} renderItem={({item}) => <RenderItem item={item}></RenderItem>}></FlatList>
    </View>
    <View style={{width:'10%',height:'10%',position:'absolute',top:Window.height/20,left:Window.width/20}}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Aventuras');
      }}>
        <View style={{backgroundColor:AppColors.azul,width:50,height:50,borderRadius:25,borderWidth:5,borderColor:AppColors.marrom}}>
        <Logout fill={'black'} style={{transform:[{rotate:'0deg'},{scale:0.5}]}}></Logout>
        </View>
      </TouchableOpacity>
    </View>
    </MainView>
}