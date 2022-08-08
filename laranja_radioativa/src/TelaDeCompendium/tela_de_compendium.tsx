import React, { useState,Component, useContext, useEffect } from 'react';
import { StyleSheet,Switch, Text, View, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { CreationButton } from "../components/CreationButton";


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
//Telas de cada Categoria
//uso de HOOKS
