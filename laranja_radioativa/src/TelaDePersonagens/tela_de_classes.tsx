import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { ListItem } from "react-native-elements/dist/list/ListItem"
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { DadosSobrePersonagemContext, PersonagemContext } from "./tela_de_personagens"








export const TelaDeClasses = () => {

    const db = useContext(DBContext)
    const personagem = useContext(PersonagemContext);
    const dadosContext = useContext(DadosSobrePersonagemContext);
    const classe = useSharedValue('');
    
    const RenderItem = ({item}) => {
        const style = useAnimatedStyle(() => {
            return {
                backgroundColor: classe.value == item.class_name ? 'red' : AppColors.azul
            }
        })
        return <PageButton style={[{marginVertical:2,alignSelf:'center',width:'70%'},style]} title={item.class_name} onPress={() => {
            personagem.classe = item.class_name;
            classe.value = item.class_name
        }}>
        </PageButton>
    }

    return <MainView>
        <FlatList showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{paddingTop:'20%',paddingBottom:'20%'}} data={dadosContext.classes} renderItem={(props) => <RenderItem item={props.item}></RenderItem>}></FlatList>
    </MainView>
}