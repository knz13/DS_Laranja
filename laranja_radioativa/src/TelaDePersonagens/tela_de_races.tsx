import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { ListItem } from "react-native-elements/dist/list/ListItem"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { DadosSobrePersonagemContext, PersonagemContext } from "./tela_de_personagens"








export const TelaDeRaces = () => {

    const db = useContext(DBContext)
    const dadosContext = useContext(DadosSobrePersonagemContext);
    const personagem = useContext(PersonagemContext);
    const race = useSharedValue('');

    //const renderItem = ({item}) => {
    //    return <PageButton style={{alignSelf:'center',marginVertical:2,width:'70%'}} title={item.race_name} onPress={() => {}}>
    //    </PageButton>
    //}

    const RenderItem = ({item}) => {
        const style = useAnimatedStyle(() => {
            return {
                backgroundColor: race.value == item.race_name ? 'red' : AppColors.azul
            }
        })
        return <PageButton style={[{marginVertical:2,alignSelf:'center',width:'70%'},style]} title={item.race_name} onPress={() => {
            personagem.race = item.race_name;
            race.value = item.race_name
        }}>
        </PageButton>
    }

    return <MainView>
    <FlatList showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{marginTop:'20%',paddingBottom:'50%'}} data={dadosContext.racas} renderItem={(props) => <RenderItem item={props.item}></RenderItem>}></FlatList>
    </MainView>
}