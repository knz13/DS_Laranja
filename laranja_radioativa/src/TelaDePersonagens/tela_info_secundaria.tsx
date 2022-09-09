import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"





export const TelaInfoSecundaria = () => {

    return <MainView>

        <View style={{width:Window.width/1.5,alignItems:'center'}}>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="Classe da Armadura" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="Iniciativa" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>       

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="Deslocamento" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="PV Atuais" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="PV Temporários" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="Inspiração" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

            <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <MainTextInput title="Bônus de Proficiências" 
                textInputProps={{keyboardType:'default'}} 
                textStyle={{textAlign:'center'}}
                style={{margin:'3%',height:80}}>
                </MainTextInput>
            </View>

        </View>

    </MainView>

}