import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { useNavigation } from "@react-navigation/native"
import { MainTextInput } from "../components/MainTextInput"



// nao esta funcionando socorro 

export const TelaInfoAdicional = () => {
    const navigation = useNavigation();

    return <MainView>

    <ScrollView>

        <View style={{width:Window.width/1.5,alignItems:'center'}}>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Traços de Personalidade" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Ideais" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>       

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Ligações" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Defeitos" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Aparência do Personagem" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Aliados e Organizações" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
            <MainTextInput title="Informações Adicionais/Outros" 
            textInputProps={{keyboardType:'default',multiline:true}} 
            textStyle={{textAlign:'center'}}
            style={{margin:'3%',height:80}}>
            </MainTextInput>
        </View>

        </View>

    </ScrollView>
    
    </MainView>
}