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
import { MainTextInput } from "../components/MainTextInput";





export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([{}]);
    const [attributes,setAttributes] = useState([{}]);
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);
    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT class_name FROM classes`,[],(tx,result) => {
                if(result.rows.length > 0){
                    setClasses(result.rows._array);
                }
            });
            tx.executeSql(`SELECT race_name FROM races`,[],(tx,result) => {
                if(result.rows.length > 0){
                    setRaces(result.rows._array);
                }
            });
        })
    },[])

    const textoDosBotoes = ['classes','raças','atributos','proficiências','salvaguardas','perícias','informações secundárias','informações adicionais']

    const renderizarDentroDoBotao = (nome : string) => {
        if(nome == "classes") {
            return <TelaDeClasses></TelaDeClasses>
        }
        return <View></View>
    }


    return <MainView>


        <Text style={{color:AppColors.vermelho_saturado}}>Nome do Personagem</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <MainTextInput title={'Nome do personagem'}></MainTextInput>

        
    </MainView>

    
}