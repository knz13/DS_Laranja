import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps,NativeStackHeaderProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { TelaDeLogin } from './src/TelaDeLogin/tela_de_login';
import { TelaDeMenu } from './src/TelaDeMenu/tela_de_menu';
import { GerarDadosPersonagem, PersonagemContext, TelaDePersonagens } from './src/TelaDePersonagens/tela_de_personagens';
import { TelaDeCompendium } from './src/TelaDeCompendium/tela_de_compendium';
import { DBContext, GlobalContext, Window } from './src/geral';
import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { TelaDeCadastro } from './src/TelaDeLogin/tela_de_cadastro';
import { TelaDeCriacaoDePersonagens } from './src/TelaDePersonagens/tela_de_criacao_de_personagens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import BackButton from './src/components/BackButton'
import { AppColors } from './src/styles';
import { HeaderProps } from 'react-native-elements';
import { TelaDeAventuras } from './src/TelaDeAventuras/TelaDeAventuras';
import { TelaDeClasses } from './src/TelaDePersonagens/tela_de_classes';
import { TelaDeRaces } from './src/TelaDePersonagens/tela_de_races';
import { TelaDeAtributos } from './src/TelaDePersonagens/tela_de_atributos';
import { TelaDePericias } from './src/TelaDePersonagens/tela_de_pericias';
import { MainView } from './src/components/MainView';
import { TelaDeAdicaoDeSalas } from './src/TelaDeAventuras/TelaDeAdicaoDeSalas';
import { TelaDeAtributosInstrucoes } from './src/TelaDePersonagens/tela_de_atributos_instrucoes';
import { TelaInfoAdicional } from './src/TelaDePersonagens/tela_info_adicional';
import { TelaInfoSecundaria } from './src/TelaDePersonagens/tela_info_secundaria';
import { TelaDeSalvaguardas } from './src/TelaDePersonagens/tela_de_salvaguardas';
import { TelaDeBackground } from './src/TelaDePersonagens/tela_de_background';
import { TelaDeBackgroundInstrucoes } from './src/TelaDePersonagens/tela_de_background_instrucoes';
import { TelaGenericaCompendium } from './src/TelaDeCompendium/tela_generica';
import { TelaGenericaCompendiumDescricao } from './src/TelaDeCompendium/tela_generica_descricao';




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
  
  if(!await (await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite/mainDB.db")).exists){
    await FileSystem.downloadAsync(
      Asset.fromModule(require('./assets/mainDB.db')).uri,
      FileSystem.documentDirectory + `SQLite/mainDB.db`
    ).then(() => {
      console.log('copied mainDB!');
    });
  } 
}




export default function App() {



  loadingFunc();

  useFonts({
    'exo':require('./assets/fonts/Exo2-Bold.ttf'),
    'inter':require('./assets/fonts/Inter-SemiBold.ttf')
  })

  const HeaderFunc = ({props,titulo,backFunc} : {props:any,titulo:string,backFunc?:() => void}) => {
    
    return <View style={{width:'100%',height:Window.height/8,backgroundColor:AppColors.azul_escuro_fundo,borderWidth:1,borderBottomColor:'white'}}>
    <View style={{height:'50%'}}></View>
    <View style={{flexDirection:'row',alignSelf:'center',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{alignSelf:'center',alignItems:'center',position:'absolute',left:Window.width/15,width:Window.width/15,height:Window.width/15,transform:[{scaleX:-1}]}} onPress={() => {
                if(backFunc){
                  backFunc()
                }
                props.navigation.goBack();
                
            }}>
                <BackButton fill={AppColors.azul}></BackButton>
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:25,alignSelf:'center',fontFamily:'inter'}}>{titulo.toUpperCase()}</Text>
        <Text style={{position:'absolute',right:Window.width/15}}></Text>
    </View>
    </View>
  }

 

  return (
    <PersonagemContext.Provider value={GerarDadosPersonagem()}>
    <GlobalContext.Provider value={{token:null,compendium_items:{}}}>
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
          <Stack.Screen name="Personagens" options={{header:(props) => <HeaderFunc props={props} titulo={'personagens'}></HeaderFunc>}} component={TelaDePersonagens} />
          <Stack.Screen name="Personagens/Criacao" options={{header:(props) => <HeaderFunc props={props} titulo={'criação'}></HeaderFunc>}} component={TelaDeCriacaoDePersonagens} />
          <Stack.Screen name="Personagens/Criacao/Classes" options={{header:(props) => <HeaderFunc props={props} titulo={'classes'}></HeaderFunc>}} component={TelaDeClasses} />
          <Stack.Screen name="Personagens/Criacao/Racas" options={{header:(props) => <HeaderFunc props={props} titulo={'raças'}></HeaderFunc>}} component={TelaDeRaces} />
          <Stack.Screen name="Personagens/Criacao/Atributos" options={{header:(props) => <HeaderFunc props={props} titulo={'atributos'}></HeaderFunc>}} component={TelaDeAtributos} />
          <Stack.Screen name="Personagens/Criacao/Atributos/Instrucoes" options={{header:(props) => <HeaderFunc props={props} titulo={'instruções'}></HeaderFunc>}} component={TelaDeAtributosInstrucoes} />
          <Stack.Screen name="Personagens/Criacao/Pericias" options={{header:(props) => <HeaderFunc props={props} titulo={'perícias'}></HeaderFunc>}} component={TelaDePericias} />
          <Stack.Screen name="Personagens/Criacao/InfoAdicionais" options={{header:(props) => <HeaderFunc props={props} titulo={'info adicional'}></HeaderFunc>}} component={TelaInfoAdicional} />
          <Stack.Screen name="Personagens/Criacao/InfoSecundaria" options={{header:(props) => <HeaderFunc props={props} titulo={'info secundária'}></HeaderFunc>}} component={TelaInfoSecundaria} />
          <Stack.Screen name="Personagens/Criacao/Salvaguardas" options={{header:(props) => <HeaderFunc props={props} titulo={'proficiências e salvaguardas'}></HeaderFunc>}} component={TelaDeSalvaguardas} />
          <Stack.Screen name="Personagens/Criacao/Background" options={{header:(props) => <HeaderFunc props={props} titulo={'background'}></HeaderFunc>}} component={TelaDeBackground} />
          <Stack.Screen name="Personagens/Criacao/Background/Instrucoes" options={{header:(props) => <HeaderFunc props={props} titulo={'instruções'}></HeaderFunc>}} component={TelaDeBackgroundInstrucoes} />
          <Stack.Screen name="Aventuras" options={{header:(props) => <HeaderFunc props={props} titulo={'aventuras'}></HeaderFunc>}} component={TelaDeAventuras} />
          <Stack.Screen name="Aventuras/Adicao" options={{header:(props) => <HeaderFunc props={props} titulo={'Adicionar'}></HeaderFunc>}} component={TelaDeAdicaoDeSalas} />
          <Stack.Screen name="Compendium" options={{header:(props) => <HeaderFunc props={props} titulo={'compendium'}></HeaderFunc>}} component={TelaDeCompendium} />
          <Stack.Screen name="Compendium/TelaGenerica" options={{header:(props) => <HeaderFunc props={props} titulo={'compendium'}></HeaderFunc>}} component={TelaGenericaCompendium} />
          <Stack.Screen name="Compendium/TelaGenerica/TelaDescricaoGenerica" options={{header:(props) => <HeaderFunc props={props} titulo={'compendium'}></HeaderFunc>}} component={TelaGenericaCompendiumDescricao} />
          
        </Stack.Navigator>
      </NavigationContainer>
      </DBContext.Provider>
      </GlobalContext.Provider>
      </PersonagemContext.Provider>
    );

}