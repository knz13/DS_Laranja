import {DBContext, Props} from "../geral";
import React, { useState,Component, useContext, useEffect } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "../styles";
import { MainView } from "../components/MainView";






export const TelaDeCompendium = () => {

    const db = useContext(DBContext);

    const [data,setData] = useState([] as Array<string>)

    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql('SELECT class_name FROM classes',[],(tx,result) => {
                setData(result.rows._array);
            });
        },(err) => {
            console.log(err)
        })
    })

    return <MainView>
        <ScrollView style={{}}></ScrollView>
    </MainView>
}