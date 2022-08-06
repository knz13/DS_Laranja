import {Props} from "../geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Alert, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import { Styles } from "../styles";

import Button from "./../components/Button";
import { MainView } from "./../components/MainView";
import { useNavigation } from "@react-navigation/native";

export const TelaDeMenu = () => {

    const navigator = useNavigation();

    return (
      <MainView>
        <Button labelButton="AVENTURAS" onpress={() => {

        }}/>
        <Button labelButton="PERSONAGENS" onpress={() => {
          navigator.navigate('Personagens')
        }}/>
        <Button labelButton="COMPENDIUM" onpress={() => {
          navigator.navigate('Compendium')
        }}/>
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

