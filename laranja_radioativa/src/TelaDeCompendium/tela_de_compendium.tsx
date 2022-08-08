import React, { useState,Component, useContext, useEffect } from 'react';
<<<<<<< Updated upstream
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "../styles";

=======
import { StyleSheet,Switch, Text, View, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { CreationButton } from "../components/CreationButton";
>>>>>>> Stashed changes





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

    return <View style={Styles.mainView}>
        <ScrollView style={{}}></ScrollView>
<<<<<<< Updated upstream
    </View>
}
=======
    </MainView>
}
//Telas de cada Categoria
//uso de HOOKS

>>>>>>> Stashed changes
