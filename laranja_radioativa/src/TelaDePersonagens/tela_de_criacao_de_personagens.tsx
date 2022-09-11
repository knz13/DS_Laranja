import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext, GlobalContext } from "./../geral"
import { AppColors, AppConstants, Styles } from "./../styles"
import { LinearGradient } from 'expo-linear-gradient';
import { MainView } from "./../components/MainView";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Animated,{SlideInDown} from "react-native-reanimated";
import { PageButton } from "./../components/PageButton";
import { NavigationScreenProp, SafeAreaView } from "react-navigation";
import { TelaDeClasses } from "./tela_de_classes";
import { TelaDeRaces } from "./tela_de_races";
import { TelaDeAtributos } from "./tela_de_atributos";
import { TelaDePericias } from "./tela_de_pericias";
import { TelaInfoSecundaria } from "./tela_info_secundaria";
import { TelaInfoAdicional } from "./tela_info_adicional";
import { MainTextInput } from "../components/MainTextInput";
import { DadosSobrePersonagemContext, GerarDadosPersonagem, PersonagemContext } from "./tela_de_personagens";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";




export const TelaDeCriacaoDePersonagens = (props: NavigationScreenProp<{}>) => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([{}]);
    const [attributes,setAttributes] = useState([{}]);
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);
    const global = useContext(GlobalContext);
    let personagem = useContext(PersonagemContext);
    const navigation = useNavigation();
    const dadosContext = useContext(DadosSobrePersonagemContext);
    const textoDosBotoes = ['classes','raças','atributos','proficiências e salvaguardas','perícias','informações secundárias','informações adicionais','backstory']


    

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
        } else if (nome == 'proficiências e salvaguardas') {
            return () => {
                navigation.navigate("Personagens/Criacao/Salvaguardas");
            }
        } else if (nome == 'perícias') {
            return () => {
                navigation.navigate("Personagens/Criacao/Pericias");
            }
        } else if (nome == 'informações secundárias') {
            return () => {
                navigation.navigate("Personagens/Criacao/InfoSecundaria");
            }
        } else if (nome == 'informações adicionais') {
            return () => {
                navigation.navigate("Personagens/Criacao/InfoAdicionais");
            }
        } else if (nome == 'backstory') {
            return () => {
                navigation.navigate("Personagens/Criacao/Background");
            }
        } 
        return () => {}
    }


    return <MainView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:'40%',paddingBottom:'20%',width:'100%'}}>
            <MainTextInput title={'Nome do personagem'} textInputProps={{defaultValue:personagem.nome}} onChangeText={text => personagem.nome = text}></MainTextInput>
            <View style={{width:'40%',marginTop:'5%',alignItems:'center'}}>
            {[...Array(textoDosBotoes.length/2)].map((item,index) => {
                return <View style={{flexDirection: "row",width:'100%',marginVertical:'5%'}}>
                    <PageButton title={textoDosBotoes[index*2]} onPress={renderizarDentroDoBotao(textoDosBotoes[index*2])}></PageButton>
                    <View style={{width:'7%'}}></View>
                    <PageButton title={textoDosBotoes[index*2+1]} onPress={renderizarDentroDoBotao(textoDosBotoes[index*2+1])}></PageButton>
                </View>
            })}
            </View>

            <PageButton title={personagem.id_do_personagem == ''? 'Criar' : 'Modificar'} onPress={() => {
                if(personagem.id_do_personagem == ''){
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
                                'x-access-token':global.token,
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify(personagem)
                        }).then(response => response.json()).then(json => {
                            if(json['state'] == "success"){
                                alert('Personagem criado!');
                                navigation.navigate('Personagens');
                            }
                        });
                    }
                })
                } else {
                    fetch(`https://dnd-party.herokuapp.com/database/character/${personagem.id_do_personagem}`,{
                            method:'PATCH',
                            headers:{
                                'x-access-token':global.token,
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify({
                                character_name:personagem.nome,
                                class:personagem.classe,
                                race:personagem.race,
                                background:personagem.background,
                                attributes:`${personagem.atributos.forca} ${personagem.atributos.destreza} ${personagem.atributos.constituicao} ${personagem.atributos.inteligencia} ${personagem.atributos.sabedoria} ${personagem.atributos.carisma}`,
                                skills:`${personagem.pericias.acrobacia} ${personagem.pericias.arcanismo} ${personagem.pericias.atletismo} ${personagem.pericias.atuacao} ${personagem.pericias.enganacao} ${personagem.pericias.furtividade} ${personagem.pericias.historia} ${personagem.pericias.intimidacao} ${personagem.pericias.intuicao} ${personagem.pericias.investigacao} ${personagem.pericias.lidarComAnimais} ${personagem.pericias.medicina} ${personagem.pericias.natureza} ${personagem.pericias.percepcao} ${personagem.pericias.persuasao} ${personagem.pericias.prestidigitacao} ${personagem.pericias.religiao} ${personagem.pericias.sobrevivencia}`,
                                level:personagem.nivel
                            })
                        }).then(response => response.json()).then(json => {
                            if(json['state'] == "success"){
                                alert('Personagem atualizado!');
                                navigation.navigate('Personagens');
                            }
                        });
                }
            }} style={{marginTop:20}}></PageButton>
        </ScrollView>

    </MainView>
    
}