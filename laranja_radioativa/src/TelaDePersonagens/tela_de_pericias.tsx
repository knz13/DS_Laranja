import React, { useContext, useRef, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"





export const TelaDePericias = () => {

    let acrobacia = useRef('').current;
    let arcanismo = useRef('').current;
    let atletismo = useRef('').current;
    let atuacao = useRef('').current;
    let enganacao = useRef('').current;
    let furtividade = useRef('').current;
    let historia = useRef('').current;
    let intimidacao = useRef('').current;
    let intuicao = useRef('').current;
    let investigacao = useRef('').current;
    let lidarComAnimais = useRef('').current;
    let medicina = useRef('').current;
    let natureza = useRef('').current;
    let percepcao = useRef('').current;
    let persuasao = useRef('').current;
    let prestidigitacao = useRef('').current;
    let religiao = useRef('').current;
    let sobrevivencia = useRef('').current;

    return <MainView>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="Acrobacia" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            acrobacia = text;
            console.log(acrobacia);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Arcanismo" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            arcanismo = text;
            console.log(arcanismo);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Atletismo" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            atletismo = text;
            console.log(atletismo);
            }}>
            </MainTextInput>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="Atuação" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            atuacao = text;
            console.log(atuacao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Enganação" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            enganacao = text;
            console.log(enganacao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Furtividade" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            furtividade = text;
            console.log(furtividade);
            }}>
            </MainTextInput>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="História" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            historia = text;
            console.log(historia);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Intimidação" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            intimidacao = text;
            console.log(intimidacao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Intuição" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            intuicao = text;
            console.log(intuicao);
            }}>
            </MainTextInput>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="Investigação" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            investigacao = text;
            console.log(investigacao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Lidar com Animais" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            lidarComAnimais = text;
            console.log(lidarComAnimais);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Medicina" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            medicina = text;
            console.log(medicina);
            }}>
            </MainTextInput>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="Natureza" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            natureza = text;
            console.log(natureza);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Percepção" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            percepcao = text;
            console.log(percepcao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Persuasão" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            persuasao = text;
            console.log(persuasao);
            }}>
            </MainTextInput>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <MainTextInput title="Prestidigitação" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            prestidigitacao = text;
            console.log(prestidigitacao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Religião" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            religiao = text;
            console.log(religiao);
            }}>
            </MainTextInput>
        </View>

        <View style={{width:'30%'}}>
            <MainTextInput title="Sobrevivência" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
            sobrevivencia = text;
            console.log(sobrevivencia);
            }}>
            </MainTextInput>
        </View>

        </View>


    </MainView>
}