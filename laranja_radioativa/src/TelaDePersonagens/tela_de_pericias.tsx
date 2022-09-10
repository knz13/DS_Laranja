import React, { useContext, useEffect, useRef, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PersonagemContext } from "./tela_de_personagens"
import { useNavigation } from "@react-navigation/native"





export const TelaDePericias = () => {

    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);


    const [acrobacia,setAcrobacia] = useState(parseInt(personagem.pericias.acrobacia));
    const [arcanismo,setArcanismo] = useState(parseInt(personagem.pericias.arcanismo));
    const [atletismo,setAtletismo] = useState(parseInt(personagem.pericias.atletismo));
    const [atuacao,setAtuacao] = useState(parseInt(personagem.pericias.atuacao));
    const [enganacao,setEnganacao] = useState(parseInt(personagem.pericias.enganacao));
    const [furtividade,setFurtividade] = useState(parseInt(personagem.pericias.furtividade));
    const [historia,setHistoria] = useState(parseInt(personagem.pericias.historia));
    const [intimidacao,setIntimidacao] = useState(parseInt(personagem.pericias.intimidacao));
    const [intuicao,setIntuicao] = useState(parseInt(personagem.pericias.intuicao));
    const [investigacao,setInvestigacao] = useState(parseInt(personagem.pericias.investigacao));
    const [lidarComAnimais,setLidarComAnimais] = useState(parseInt(personagem.pericias.lidarComAnimais));
    const [medicina,setMedicina] = useState(parseInt(personagem.pericias.medicina));
    const [natureza,setNatureza] = useState(parseInt(personagem.pericias.natureza));
    const [percepcao,setPercepcao] = useState(parseInt(personagem.pericias.percepcao));
    const [persuasao,setPersuasao] = useState(parseInt(personagem.pericias.persuasao));
    const [prestidigitacao,setPrestidigitacao] = useState(parseInt(personagem.pericias.prestidigitacao));
    const [religiao,setReligiao] = useState(parseInt(personagem.pericias.religiao));
    const [sobrevivencia,setSobrevivencia] = useState(parseInt(personagem.pericias.sobrevivencia));
    

    useEffect(() => {

        personagem.pericias.acrobacia = acrobacia.toString();
        personagem.pericias.arcanismo = arcanismo.toString();
        personagem.pericias.atletismo = atletismo.toString();
        personagem.pericias.atuacao = atuacao.toString();
        personagem.pericias.enganacao = enganacao.toString();
        personagem.pericias.furtividade = furtividade.toString();
        personagem.pericias.historia = historia.toString();
        personagem.pericias.intimidacao = intimidacao.toString();
        personagem.pericias.intuicao = intuicao.toString();
        personagem.pericias.investigacao = investigacao.toString();
        personagem.pericias.lidarComAnimais = lidarComAnimais.toString();
        personagem.pericias.medicina = medicina.toString();
        personagem.pericias.natureza = natureza.toString();
        personagem.pericias.percepcao = percepcao.toString();
        personagem.pericias.persuasao = persuasao.toString();
        personagem.pericias.prestidigitacao = prestidigitacao.toString();
        personagem.pericias.religiao = religiao.toString();
        personagem.pericias.sobrevivencia = sobrevivencia.toString();

    },[acrobacia,arcanismo,atletismo,atuacao,enganacao,furtividade,historia,intimidacao,intuicao,investigacao,lidarComAnimais,medicina,natureza,percepcao,persuasao,prestidigitacao,religiao,sobrevivencia]);

    const renderItem = (title:string,func:(text:string) => void,value:number) => {
        return <MainTextInput title={`${title}`} textInputProps={{keyboardType:'numeric',defaultValue:value.toString() != 'NaN'? value.toString() : ''}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
                if(func){
                    func(text)
                }
        }}></MainTextInput>
    }


    return <MainView>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('Acrobacia',text => setAcrobacia(parseInt(text)),acrobacia)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Arcanismo',text => setArcanismo(parseInt(text)),arcanismo)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Atletismo',text => setAtletismo(parseInt(text)),atletismo)}
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('Atuação',text => setAtuacao(parseInt(text)),atuacao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Enganação',text => setEnganacao(parseInt(text)),enganacao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Furtividade',text => setFurtividade(parseInt(text)),furtividade)}
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('História',text => setHistoria(parseInt(text)),historia)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Intimidação',text => setIntimidacao(parseInt(text)),intimidacao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Intuição',text => setIntuicao(parseInt(text)),intuicao)}
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('Investigação',text => setInvestigacao(parseInt(text)),investigacao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Lidar com Animais',text => setLidarComAnimais(parseInt(text)),lidarComAnimais)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Medicina',text => setMedicina(parseInt(text)),medicina)}
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('Natureza',text => setNatureza(parseInt(text)),natureza)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Percepção',text => setPercepcao(parseInt(text)),percepcao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Persuasão',text => setPersuasao(parseInt(text)),persuasao)}
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            {renderItem('Prestidigitação',text => setPrestidigitacao(parseInt(text)),prestidigitacao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Religião',text => setReligiao(parseInt(text)),religiao)}
        </View>

        <View style={{width:'30%'}}>
            {renderItem('Sobrevivência',text => setSobrevivencia(parseInt(text)),sobrevivencia)}
        </View>

        </View>


    </MainView>
}