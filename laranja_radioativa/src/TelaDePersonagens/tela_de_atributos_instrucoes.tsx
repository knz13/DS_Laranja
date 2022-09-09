import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PopupCard } from "../components/PopupCard"
import { AlertPopup } from "../components/AlertPopup"





export const TelaDeAtributosInstrucoes = () => {

    return <MainView>
        <View style={{width:Window.width/1.3,alignItems:'center'}}>
        
            <Text style={{color:'white',fontSize: 22,textAlign:'justify',fontFamily:'inter'}}>
                Para determinar os valores de seus atributos, por favor,
                siga os passos listados abaixo!
                {"\n"}
                {"\n"}1 - Role 4 dados de 6 faces;
                {"\n"}2 - Descarte o menor valor;
                {"\n"}3 - Some os valores dos 3 dados restantes;
                {"\n"}4 - Guarde essa soma, pois ela será o valor de um de seus atributos!
                {"\n"}
                {"\n"}Repita esse processo até que você tenha 6 valores. Agora, é só escolher
                para cada atributo um desses valores obtidos, até que todos tenham sido utilizados
                e todos os valores de atributos tenham sido preenchidos!
            </Text>

        </View>
    </MainView>
}