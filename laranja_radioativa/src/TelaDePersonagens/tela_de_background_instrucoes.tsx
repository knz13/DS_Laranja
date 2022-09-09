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





export const TelaDeBackgroundInstrucoes = () => {

    return <MainView>
        <View style={{width:Window.width/1.3,alignItems:'center'}}>
        
            <Text style={{color:'white',fontSize: 22,textAlign:'justify',fontFamily:'inter'}}>
                O que seu personagem fazia até começar sua aventura? O que contribuiu para sua
                formação? O que moldou a personalidade de quem ele é hoje? O que o motivou a seguir
                esses rumos e tomar as decisões que o trouxeram até aqui?
                {"\n"}
                Escreva aqui o passado de seu personagem, isto é, seus antecedentes! Vale de tudo.
                De onde veio? Quem faz parte de sua família? Qual sua classe social? Que educação
                ele recebeu? Quais suas experiências mais marcantes?
            </Text>

        </View>
    </MainView>
}