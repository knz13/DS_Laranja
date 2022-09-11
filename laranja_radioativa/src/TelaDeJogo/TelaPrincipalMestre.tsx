



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




export const TelaPrincipalMestre = (props : NativeStackScreenProps<{}>) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const global = useContext(GlobalContext);
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
        return  <>
            <PageButton disabled textRender={() => {
                return <View style={{backgroundColor:'red'}}></View>
            }}></PageButton>
        </>
    }

    return <MainView>
    <View style={{width:'10%',height:'10%',position:'absolute',top:Window.height/20,left:Window.width/20}}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Aventuras');
      }}>
        <View style={{backgroundColor:AppColors.azul,width:50,height:50,borderRadius:25,borderWidth:5,borderColor:AppColors.marrom}}>
        <Logout fill={'black'} style={{transform:[{rotate:'0deg'},{scale:0.5}]}}></Logout>
        </View>
      </TouchableOpacity>
    </View>
    <FlatList data={personagens} renderItem={({item}) => <RenderItem item={item}></RenderItem>}></FlatList>
    </MainView>
}