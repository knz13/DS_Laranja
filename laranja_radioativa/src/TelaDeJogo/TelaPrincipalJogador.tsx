import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";
import Logout from './../components/logout'
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import App from "../../App";




export const TelaPrincipalJogador = (props: NativeStackScreenProps<{}>) => {
    const navigation = useNavigation();
    const global = useContext(GlobalContext);
    const [personagem,setPersonagem] = useState(null)

    useEffect(() => {
        if(personagem == null){
          fetch(`https://dnd-party.herokuapp.com/database/character/${props.route.params.char_id}`,{
                method:"GET",
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                setPersonagem(JSON.parse(json['message']));
            })
        }
        const interval = setInterval(() => {
            fetch(`https://dnd-party.herokuapp.com/database/character/${props.route.params.char_id}`,{
                method:"GET",
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                setPersonagem(JSON.parse(json['message']));
            })
        }, 5000);
        
        return () => clearInterval(interval); 
    }, [])

    return <MainView>
    <View style={{width:'10%',height:'10%',position:'absolute',top:Window.height/20,left:Window.width/20}}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Aventuras')
      }}>
        <View style={{backgroundColor:AppColors.azul,width:50,height:50,borderRadius:25,borderWidth:5,borderColor:AppColors.marrom}}>
        <Logout fill={'black'} style={{transform:[{rotate:'0deg'},{scale:0.5}]}}></Logout>
        </View>
      </TouchableOpacity>
    </View>
    {personagem && <><PageButton title={`${personagem.nome}\nraça: ${personagem.race}\nclasse: ${personagem.classe}`} textStyle={{textAlign:'center'}} style={{backgroundColor:AppColors.azul_escuro_fundo,borderColor:AppColors.azul,borderWidth:1,width:'80%',marginVertical:'10%'}}>
      <View style={{height:'100%',left: 10,position:'absolute',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontFamily:'inter',fontSize:20}}>{personagem.nivel}</Text>
      </View>
    </PageButton>
    <View style={{width:'70%'}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:'5%'}}>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`For\n${personagem.atributos.forca}`}</Text>
      </View>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`Dex\n${personagem.atributos.destreza}`}</Text>
      </View>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`Con\n${personagem.atributos.constituicao}`}</Text>
      </View>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`Int\n${personagem.atributos.inteligencia}`}</Text>
      </View>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`Sab\n${personagem.atributos.sabedoria}`}</Text>
      </View>
      <View style={{borderColor:AppColors.azul,borderWidth:1,borderRadius:15}}>
        <Text style={{textAlign:'center',fontFamily:'inter',fontSize:15,color:'white',margin:10}}>{`Cha\n${personagem.atributos.carisma}`}</Text>
      </View>
      
    </View>
    <PageButton title ={'Proficiência'} style={{marginVertical:'2%'}}></PageButton>
    <PageButton title ={'Armas/Magias'} style={{marginVertical:'2%'}}></PageButton>
    <PageButton title ={'Equipamento'} style={{marginVertical:'2%'}}></PageButton>
    </View></>}
    </MainView>
}