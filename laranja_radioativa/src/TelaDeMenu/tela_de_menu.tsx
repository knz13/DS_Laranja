import {DBContext, Props, Window} from "../geral";
import React, { useState,Component, useContext } from 'react';
import { StyleSheet,Switch, Text, View,Alert, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import { AppColors, Styles } from "../styles";

import Button from "./../components/Button";
import { MainView } from "./../components/MainView";
import { useNavigation } from "@react-navigation/native";
import {PageButton} from './../components/PageButton'
import { TelaDeAventuras } from "../TelaDeAventuras/TelaDeAventuras";
import { TelaDePersonagens } from "../TelaDePersonagens/tela_de_personagens";
import { TelaDeCompendium } from "../TelaDeCompendium/tela_de_compendium";
import Logout from './../components/logout'
import * as FileSystem from 'expo-file-system'

interface MenuButtonInterface {
  text:string,
  children?:React.ReactNode,
  onPress?:() => void
}

export const TelaDeMenu = () => {

    const navigation = useNavigation();

    const MenuButton = ({text,children,onPress} : MenuButtonInterface) => {
      return <PageButton textStyle={{fontFamily:'exo',color:'white'}} onPress={onPress} title={text} style={{backgroundColor:AppColors.azul,marginVertical:'2%',width:'100%',alignSelf:'center'}}>
        {children}
      </PageButton>
    }

    return (
      <MainView>
          <View style={{width:'10%',height:'10%',position:'absolute',top:Window.height/20,left:Window.width/20}}>
            <TouchableOpacity onPress={() => {
              FileSystem.getInfoAsync(FileSystem.documentDirectory + 'text.txt').then(file => {
                if(file.exists){
                  FileSystem.deleteAsync(FileSystem.documentDirectory + 'text.txt');
                }
                navigation.navigate('Login');
              })
            }}>
              <View style={{backgroundColor:AppColors.azul,width:50,height:50,borderRadius:25,borderWidth:5,borderColor:AppColors.marrom}}>
              <Logout fill={'black'} style={{transform:[{rotate:'0deg'},{scale:0.5}]}}></Logout>
              </View>
            </TouchableOpacity>
          </View>
        <View style={{alignItems:'center',justifyContent:'center',height:'25%'}}>
          <MenuButton text={"AVENTURAS"} onPress={() => {
            navigation.navigate('Aventuras');
          }}>
          </MenuButton>
          <MenuButton text={"PERSONAGENS"} onPress={() => {
            navigation.navigate('Personagens');
          }}>
          </MenuButton  >
          <MenuButton text={"COMPENDIUM"} onPress={() => {
            navigation.navigate('Compendium');
          }}>
          </MenuButton>
        </View>
      </MainView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

