import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext, GlobalContext } from "./../geral"
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
import { DadosSobrePersonagemContext, PersonagemContext } from "./tela_de_personagens";
import { useNavigation } from "@react-navigation/native";




export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([{}]);
    const [attributes,setAttributes] = useState([{}]);
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);
    const global = useContext(GlobalContext);
    const personagem = useContext(PersonagemContext);
    const navigation = useNavigation();
    const dadosContext = useContext(DadosSobrePersonagemContext);
    const textoDosBotoes = ['classes','raças','atributos','modificadores','salvaguardas','perícias','informações secundárias','informações adicionais']

    useEffect(() => {
        if(dadosContext.classes.length == 0){
            db.readTransaction(tx => {
                tx.executeSql(`SELECT * FROM classes`,[],(tx,result) => {
                    dadosContext.classes = (result.rows._array);
                })
            })
        }
        if(dadosContext.racas.length == 0){
            db.readTransaction(tx => {
                tx.executeSql(`SELECT * FROM races`,[],(tx,result) => {
                    dadosContext.racas = (result.rows._array);
                })
            })
        }
    })

    const renderizarDentroDoBotao = (nome : string) => {
        if(nome == "classes") {
            return () => {
                navigation.navigate("Personagens/Criacao/Classes");
            }
        } else if (nome == 'raças') {
            return () => {
                navigation.navigate("Personagens/Criacao/Racas");
            }
        } else if (nome == 'atributos') {
            return () => {
                navigation.navigate("Personagens/Criacao/Atributos");
            }
        } else if (nome == 'modificadores') {
            return () => {
                navigation.navigate("Personagens/Criacao/Modificadores");
            }
        } else if (nome == 'salvaguardas') {
            return () => {
                navigation.navigate("Personagens/Criacao/Salvaguardas");
            }
        } else if (nome == 'perícias') {
            return () => {
                navigation.navigate("Personagens/Criacao/Pericias");
            }
        } else if (nome == 'informações secundárias') {
            return () => {
                navigation.navigate("Personagens/Criacao/InfoSecundarias");
            }
        } else if (nome == 'informações adicionais') {
            return () => {
                navigation.navigate("Personagens/Criacao/InfoAdicionais");
            }
        } 
        return () => {}
    }


    return <MainView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:'40%',paddingBottom:'20%',width:'100%'}}>
            <MainTextInput title={'Nome do personagem'}></MainTextInput>
            <View style={{width:'40%',marginTop:'5%',alignItems:'center'}}>
            {[...Array(textoDosBotoes.length/2)].map((item,index) => {
                return <View style={{flexDirection: "row",width:'100%',marginVertical:'5%'}}>
                    <PageButton title={textoDosBotoes[index*2]} onPress={renderizarDentroDoBotao(textoDosBotoes[index*2])}></PageButton>
                    <View style={{width:'7%'}}></View>
                    <PageButton title={textoDosBotoes[index*2+1]} onPress={renderizarDentroDoBotao(textoDosBotoes[index*2+1])}></PageButton>
                </View>
            })}
            </View>
            <PageButton title={'background'} style={{marginTop:20}}></PageButton>
            <PageButton title={'Criar'} onPress={() => {
                fetch('https://dnd-party.herokuapp.com/database/character',{
                    method:'POST',
                    headers:{
                        'x-access-token':global.token
                    }
                }).then(response => response.json()).then(json => {
                    if(json['state'] == 'success'){
                        const character_id = JSON.parse(json['message'])['character_id'];

                        fetch(`https://dnd-party.herokuapp.com/database/character/${character_id}`,{
                            method:'PATCH',
                            headers:{
                                'x-access-token':global.token
                            },
                            body:JSON.stringify({
                                class:personagem.classe,
                                race:personagem.race,
                                attributes:personagem.atributos
                            })
                        }); 
                    }
                })
            }} style={{marginTop:20}}></PageButton>
        </ScrollView>

    </MainView>
    
}