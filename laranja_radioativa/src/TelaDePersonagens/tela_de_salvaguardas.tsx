import React, { useContext, useEffect, useRef, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PopupCard } from "../components/PopupCard"
import { AlertPopup } from "../components/AlertPopup"
import { useNavigation } from "@react-navigation/native"
import { PersonagemContext } from "./tela_de_personagens"



// eh na verdade tela de proficiencias e salvaguardas, mas vai dar um pouco de role mudar isso 
// entao deixa com um nome pouco intuitivo 

export const TelaDeSalvaguardas = () => {

    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);
    const [nivel,setNivel] = useState(parseInt(personagem.nivel));

    function minhaSalvaguarda(minhaClasse : personagem.classe) {



    }

    function bonus(nivel: number) {
        if (nivel >= 1 && nivel <= 4) {
            bonus = 2
        } else if (nivel >= 5 && nivel <= 8) {
            bonus = 3
        } else if (nivel >= 9 && nivel <= 12) {
            bonus = 4
        } else if (nivel >= 13 && nivel <= 16) {
            bonus = 5
        } else if (nivel >= 17 && nivel <= 20) {
            bonus = 6
        }

        return bonus
    }

    useEffect(() => {

        personagem.nivel = nivel.toString();
        
    },[nivel]);

    const renderItem = (title:string,func:(text:string) => void,value:number) => {
        return <MainTextInput title={`${title}`} textInputProps={{keyboardType:'numeric',defaultValue:value.toString() != 'NaN'? value.toString() : ''}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
                if(func){
                    func(text)
                }
            }}></MainTextInput>
    }

    return <MainView>
        <View style={{width:Window.width/1.8,alignContent:'center',alignItems:'center'}}>
        <PageButton 
        title="?" 
        style= {{width:'25%',height:'20%',marginBottom:'5%',alignItems:'center'}}
        onPress={() => {
            navigation.navigate()
        }}>
        </PageButton>
        
        {renderItem('Nível',text => setNivel(parseInt(text)),nivel)}

        <View style={{width:Window.width/1.5,alignItems:'center'}}>
            
            <Text style={{color:'white',fontSize: 20,textAlign:'justify',fontFamily:'inter'}}>
                Bônus de Proficiência: +{bonus(nivel)}
            </Text>

        </View>
        
        </View>
    </MainView>
}