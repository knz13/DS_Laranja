import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { TelaDeLogin } from './tela_de_login';
import MateriasHome from './tela_de_materias';
import { TelaDoHub } from './tela_do_hub';
import { Props } from './geral';

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();


function MainScreen({navigation} : Props){
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Login" component={TelaDeLogin}></Bottom.Screen>
      <Bottom.Screen name="Hub" component={TelaDoHub}></Bottom.Screen>
      <Bottom.Screen name="Materias" component={MateriasHome}></Bottom.Screen>
    </Bottom.Navigator>
  );
}

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {backgroundColor: "rgb(20,20,90)"},
            headerTintColor: 'rgb(255,255,255)',
          }}
        >
          <Stack.Screen name="Main" options={{headerShown:false,gestureEnabled:false,headerLeft: () => <></>}} component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

}