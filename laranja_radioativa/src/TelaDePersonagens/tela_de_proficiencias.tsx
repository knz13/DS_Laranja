import React, { useContext, useRef, useState } from "react"
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





export const TelaDeProficiencias = () => {

    const navigation = useNavigation();
    const personagem = useContext(PersonagemContext);

    return <MainView>
        
        <View style={{width:Window.width/1.8}}>
            <MainTextInput title="Nível"  textInputProps={{keyboardType:'numeric',defaultValue:personagem.nivel}} textStyle={{textAlign:'center'}} onChangeText={(text) => {
                personagem.nivel = text;
            }}></MainTextInput>
        </View>

    </MainView>
}