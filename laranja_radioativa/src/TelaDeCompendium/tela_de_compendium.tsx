import {DBContext, Props} from "../geral";
import React, { useState,Component, useContext, useEffect } from 'react';
<<<<<<< Updated upstream
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Styles } from "../styles";
import { MainView } from "../components/MainView";


=======
import { StyleSheet,Switch, Text, View, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { CreationButton } from "../components/CreationButton";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> Stashed changes


//style dos buttons
const styles1 = StyleSheet.create({button:{
    backgroundColor:AppColors.laranja_radioativo,padding:20,marginHorizontal:8,marginVertical:16,borderRadius:6,width:300}
})


export const TelaDeCompendium = () => {
    const item_types = ['Armor','Weapon','Adventuring Gear','Tools','Poisons','Potions and Oils','Wondrous Item','Other']

    return <MainView>
            <ScrollView contentContainerStyle={{flexGrow:1, marginHorizontal:20}}>
                {item_types.map(type => <CreationButton title={type} style={styles1.button} ></CreationButton>)}
            </ScrollView>   
    </MainView>
}



    return <MainView>
        <ScrollView style={{}}></ScrollView>
    </MainView>
}
=======
//Telas de cada Categoria
//uso de HOOKS
>>>>>>> Stashed changes
