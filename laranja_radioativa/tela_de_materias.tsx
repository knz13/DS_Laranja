import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet , Switch, Text, View,Button, TextInput ,TouchableOpacity , Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp, StackActions } from "@react-navigation/native";

export default function MateriasHome({navigation} : Props) {
    return (
        <View style={{flex:1}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20}}>{'\n'}Selecione o curso desejado para consulta de grade: 
                    
                </Text>
            </View>
            <View style={{flex:8,justifyContent:'center',alignContent:'center',alignSelf:'center',alignItems:'center'}}>
        
                <Button 
                    title='Engenharia Aeroespacial' 
                    onPress={()=>{navigation.navigate()}}
                    color='#f45d00'>
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button 
                    title='Engenharia Automotiva'
                    onPress={()=>{navigation.navigate()}}
                    color='#f45d00'>
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button 
                    title='Engenharia Eletrônica' 
                    onPress={()=>{navigation.navigate()}}
                    color='#f45d00'>
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button 
                    title='Engenharia de Energia'
                    onPress={()=>{navigation.navigate()}}
                    color='#f45d00'>
                </Button>
                <Text>
                    {'\n'}
                </Text>
                <Button 
                    title='Engenharia de Software' 
                    onPress={()=>{navigation.navigate('FluxSoftware')}}
                    color='#f45d00'>
                </Button>
            </View>

        </View>
        
    );
}

export function EngSoftware({navigation} : Props) {
    return (
      <ScrollView>
        <View style={{flex:1,justifyContent:'flex-start',alignContent:'flex-start',alignSelf:'center',alignItems:'flex-start',flexDirection: 'column'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#f45d00'}}>
                {'\n'}Obrigatórias{'\n'}
            </Text>
            <Button 
                title='Cálculo 1' 
                color='#f4d923'
                onPress={()=>alert('Informações a respeito da matéria aqui')}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button 
                title='Algoritmos e Programação de Computadores' 
                color='#008940'
                onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button 
                title='Desenho Industrial Assistido por Computador' 
                color='#ff1616'
                onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia e Ambiente' 
                color='#f45d00'
                onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Introdução à Engenharia' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Cálculo 2' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Física 1' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Física 1 Experimental' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Introdução à Álgebra Linear' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Probabilidade e Estatística Aplicada à Engenharia' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#f45d00'}}>
                {'\n'}Optativas{'\n'}
            </Text>
            <Button title='Desenvolvimento de Software' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Op1' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Op2' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
        </View>
      </ScrollView>
    );
}

