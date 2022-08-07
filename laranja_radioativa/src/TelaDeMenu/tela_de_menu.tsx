import {Props} from "../geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Alert, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import { AppColors, Styles } from "../styles";

import Button from "./../components/Button";
import { MainView } from "./../components/MainView";
import { useNavigation } from "@react-navigation/native";
import {CreationButton} from './../components/CreationButton'
import { TelaDeAventuras } from "../TelaDeAventuras/TelaDeAventuras";
import { TelaDePersonagens } from "../TelaDePersonagens/tela_de_personagens";
import { TelaDeCompendium } from "../TelaDeCompendium/tela_de_compendium";

interface MenuButtonInterface {
  text:string,
  children?:React.ReactNode
}

export const TelaDeMenu = () => {



    const MenuButton = ({text,children} : MenuButtonInterface) => {
      return <CreationButton title={text} style={{backgroundColor:AppColors.laranja_radioativo,marginVertical:'2%',width:'80%',alignSelf:'center'}}>
        {children}
      </CreationButton>
    }



    return (
      <MainView>
        <MenuButton text={"AVENTURAS"}>
          <TelaDeAventuras></TelaDeAventuras>
        </MenuButton>
        <MenuButton text={"PERSONAGENS"}>
          <TelaDePersonagens></TelaDePersonagens>
        </MenuButton  >
        <MenuButton text={"COMPENDIUM"}>
          <TelaDeCompendium></TelaDeCompendium>
        </MenuButton>
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

