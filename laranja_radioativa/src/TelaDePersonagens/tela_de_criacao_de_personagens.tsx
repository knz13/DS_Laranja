import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext } from "./../geral"
import { AppColors, AppConstants, Styles } from "./../styles"
import { LinearGradient } from 'expo-linear-gradient';
import { MainView } from "./../components/MainView";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Animated,{SlideInDown} from "react-native-reanimated";
import { PageButton } from "./../components/PageButton";
import { SafeAreaView } from "react-navigation";
import { TelaDeClasses } from "./tela_de_classes";
import { TelaDeRaces } from "./tela_de_races";
import { TelaDeAtributos } from "./tela_de_atributos";
import { TelaDePericias } from "./tela_de_pericias";
import { TelaInfoSecundaria } from "./tela_info_secundaria";
import { TelaInfoAdicional } from "./tela_info_adicional";
import { MainTextInput } from "../components/MainTextInput";





export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([{}]);
    const [attributes,setAttributes] = useState([{}]);
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);

    const textoDosBotoes = ['classes','raças','atributos','proficiências','salvaguardas','perícias','informações secundárias','informações adicionais']

    const renderizarDentroDoBotao = (nome : string) => {
        if(nome == "classes") {
            return <TelaDeClasses></TelaDeClasses>
        } else if (nome == 'raças') {
            return <TelaDeRaces></TelaDeRaces>
        } else if (nome == 'atributos') {
            return <TelaDeAtributos></TelaDeAtributos>
        } else if (nome == 'proficiências') {

        } else if (nome == 'salvaguardas') {
 
        } else if (nome == 'perícias') {
            return <TelaDePericias></TelaDePericias>
        } else if (nome == 'informações secundárias') {
            return <TelaInfoSecundaria></TelaInfoSecundaria>
        } else if (nome == 'informações adicionais') {
            return <TelaInfoAdicional></TelaInfoAdicional>
        } 
        return <View></View>
    }


    return <MainView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:'20%',paddingBottom:'20%',width:'100%'}}>
            <MainTextInput title={'Nome do personagem'}></MainTextInput>
            <MainTextInput textInputProps={{multiline: true}} title={"Descrição"}></MainTextInput>
            <View style={{width:'40%',marginTop:'5%',alignItems:'center'}}>
            {[...Array(textoDosBotoes.length/2)].map((item,index) => {
                return <View style={{flexDirection: "row",width:'100%',marginVertical:'5%'}}>
                    <PageButton title={textoDosBotoes[index*2]}>{renderizarDentroDoBotao(textoDosBotoes[index*2])}</PageButton>
                    <View style={{width:'7%'}}></View>
                    <PageButton title={textoDosBotoes[index*2+1]}>{renderizarDentroDoBotao(textoDosBotoes[index*2+1])}</PageButton>
                </View>
            })}
            </View>
        </ScrollView>

    </MainView>
    
}