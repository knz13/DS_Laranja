import {Props} from "./geral";
import React, { useState,Component } from 'react';
import { StyleSheet , Switch, Text, View,Button, TextInput ,TouchableOpacity , Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp, StackActions } from "@react-navigation/native";

export default function MateriasHome({navigation} : Props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignContent:'center',alignSelf:'center',alignItems:'center'}}>
            <Text>Selecione o curso desejado para consulta de grade: 
                {'\n'}
            </Text>
            
            <Button title='Engenharia Aeroespacial' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia Automotiva' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia Eletrônica' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia de Energia' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia de Software' onPress={()=>{navigation.navigate('FluxSoftware')}}>
            </Button>
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
            <Button title='Cálculo 1' onPress={()=>alert('Informações a respeito da matéria aqui')}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Algoritmos e Programação de Computadores' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Desenho Industrial Assistido por Computador' onPress={()=>{navigation.navigate()}}>
            </Button>
            <Text>
                {'\n'}
            </Text>
            <Button title='Engenharia e Ambiente' onPress={()=>{navigation.navigate()}}>
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

