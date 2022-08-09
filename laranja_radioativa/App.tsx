import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { TelaDeLogin } from './src/TelaDeLogin/tela_de_login';
import { TelaDeMenu } from './src/TelaDeMenu/tela_de_menu';
import { TelaDePersonagens } from './src/TelaDePersonagens/tela_de_personagens';
import { TelaDeCompendium } from './src/TelaDeCompendium/tela_de_compendium';
import { DBContext, GlobalContext } from './src/geral';
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { TelaDeCadastro } from './src/TelaDeLogin/tela_de_cadastro';
import { TelaDeCriacaoDePersonagens } from './src/TelaDePersonagens/tela_de_criacao_de_personagens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export interface Props {
  navigation: NavigationProp<any, any>;
}

//função para mover o banco de dados do folder assets pro folder dos documentos do celular
const loadingFunc = async () => {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  };
  
  if(await (await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/mainDB.db")).exists){
    await FileSystem.deleteAsync(FileSystem.documentDirectory + "SQLite/mainDB.db");
  }  
  await FileSystem.downloadAsync(
    Asset.fromModule(require('./assets/mainDB.db')).uri,
    FileSystem.documentDirectory + `SQLite/mainDB.db`
  ).then(() => {
    console.log('copied mainDB!');
  });
}




export default function App() {

  loadingFunc();

  useFonts({
    'exo':require('./assets/fonts/Exo2-Bold.ttf')
  })

  return (
    <GlobalContext.Provider value={{user_id:null}}>
    <DBContext.Provider value={(() => {
      return SQLite.openDatabase('mainDB.db');
    })()}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: "rgb(20,20,90)"},
            headerTintColor: 'rgb(255,255,255)',
          }}
        > 
          <Stack.Screen name="Login" component={TelaDeLogin} options={{gestureEnabled:false,headerLeft: () => <></>,headerShown:false}}></Stack.Screen>
          <Stack.Screen name="Menu" options={{headerShown:false,gestureEnabled:false,headerLeft: () => <></>}} component={TelaDeMenu} />
        </Stack.Navigator>
      </NavigationContainer>
      </DBContext.Provider>
      </GlobalContext.Provider>
    );

}