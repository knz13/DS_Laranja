import {DBContext, Props} from "../geral";
import React, { useState,Component, useContext, useEffect } from 'react';

import { StyleSheet,Switch, Text, View, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { TelaDeArmor } from "./tela_de_armor";



//style dos buttons
const styles1 = StyleSheet.create({button:{
    backgroundColor:AppColors.laranja_radioativo,marginHorizontal:8,marginVertical:8,borderRadius:6,width:300}
})


export const TelaDeCompendium = () => {
    const item_types = ['Armor','Weapon','Adventuring Gear','Tools','Poisons','Potions and Oils','Wondrous Item','Other']

    

    const renderizarItemType = (type : string) => {
        if(type == 'Armor'){
            return <TelaDeArmor></TelaDeArmor>
        }


        return <View></View>
    }

    return <MainView>
            <ScrollView contentContainerStyle={{flexGrow:1, marginHorizontal:20,marginTop:'20%'}}>
                {item_types.map(type => <PageButton title={type} style={styles1.button} >
                    
                    {renderizarItemType(type)}

                </PageButton>)}
            </ScrollView>   
    </MainView>
}
