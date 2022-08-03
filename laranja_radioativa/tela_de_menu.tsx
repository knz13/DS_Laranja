import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Alert, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import { Styles } from "./styles";

import Button from "./components/Button";

export const TelaDeMenu = () => {
  const signIn = () => {
    alert('MELHOR APLICATIVO');
  }
    return (
      <View style={styles.container}>
        <Button labelButton="AVENTURAS" onpress={signIn}/>
        <Button labelButton="PERSONAGENS" onpress={signIn}/>
        <Button labelButton="ITENS" onpress={signIn}/>

      </View>
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

