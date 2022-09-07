import React, { useContext, useEffect, useState } from "react"
import { FlatList, TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements/dist/list/ListItem"
import { useAnimatedStyle } from "react-native-reanimated"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { PersonagemContext } from "./tela_de_personagens"








export const TelaDeClasses = () => {

    const db = useContext(DBContext)
    const [classes,setClasses] = useState([] as Array<any>)
    const personagem = useContext(PersonagemContext);

    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT * FROM classes`,[],(tx,result) => {
                setClasses(result.rows._array);
            })
        })
    })


    const renderItem = ({item}) => {
        return <PageButton style={[{marginVertical:2,alignSelf:'center',width:'70%'},style]} title={item.class_name} onPress={() => {
                
                personagem.classe = item.class_name;
                console.log(personagem.classe);
                setPressed(prevPressed => !prevPressed);
            
        }}>
        </PageButton>
    }

    const style = useAnimatedStyle(() => {
        return {
            backgroundColor : pressed ? 'red' : AppColors.azul
        }
    })

    return <FlatList showsVerticalScrollIndicator={false} style={{width:'100%'}} contentContainerStyle={{paddingTop:'20%',paddingBottom:'20%'}} data={classes} renderItem={renderItem}></FlatList>
}