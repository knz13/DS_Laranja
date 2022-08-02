import {DBContext, Props} from "./geral";
import React, { useState,Component, useContext, useEffect } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "./styles";





const styles = StyleSheet.create({
  containerForm:{
    flex:2,
    backgroundColor: '#cd5f00'
  }
})


export const TelaDeMenu = () => {
    const db = useContext(DBContext);

    useEffect(() => {
      db.readTransaction(tx => {
        tx.executeSql('SELECT item_name FROM items WHERE item_id=0',[],(tx,result) => {
          console.log(JSON.stringify(result))
        })
      })
    })


    return (
      <View style={styles.containerForm}>
        <Text style={{}}>Tela de Menu</Text>
        <Text style={{}}>Teste Teste Teste</Text>  
      </View>
    )
}
  
