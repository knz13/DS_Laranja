import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { useSharedValue } from "react-native-reanimated"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { DadosSobrePersonagemContext } from "./tela_de_personagens"








export const TelaDeRaces = () => {

    const db = useContext(DBContext)
    const [races,setRaces] = useState([] as Array<any>)
    const dadosContext = useContext(DadosSobrePersonagemContext);
    const selecionado = useSharedValue('');
    
   

    const renderItem = ({item}) => {
        return <PageButton style={{alignSelf:'center',marginVertical:2,width:'70%'}} title={item.race_name} onPress={() => {}}>
        </PageButton>
    }

    return <MainView>
    <FlatList showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{marginTop:'20%',paddingBottom:'50%'}} data={dadosContext.racas} renderItem={renderItem}></FlatList>
    </MainView>
}