



import {DBContext, GlobalContext, Props, Window} from "../geral";
import React, { useState,Component, useContext, useEffect, useRef } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { AppColors, Styles } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { PopupCard } from "../components/PopupCard";
import { MainTextInput } from "../components/MainTextInput";
import Logout from './../components/logout'
import { useNavigation } from "@react-navigation/native";




export const TelaPrincipalMestre = () => {
    const navigation = useNavigation();

    return <MainView>
    <View style={{width:'10%',height:'10%',position:'absolute',top:Window.height/20,left:Window.width/20}}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Aventuras');
      }}>
        <View style={{backgroundColor:AppColors.azul,width:50,height:50,borderRadius:25,borderWidth:5,borderColor:AppColors.marrom}}>
        <Logout fill={'black'} style={{transform:[{rotate:'0deg'},{scale:0.5}]}}></Logout>
        </View>
      </TouchableOpacity>
    </View>
    </MainView>
}