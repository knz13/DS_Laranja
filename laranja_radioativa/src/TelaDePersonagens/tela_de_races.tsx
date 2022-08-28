import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"








export const TelaDeRaces = () => {

    const db = useContext(DBContext)
    const [races,setRaces] = useState([] as Array<any>)

    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT * FROM races`,[],(tx,result) => {
                setRaces(result.rows._array);
            })
        })
    })

    const renderItem = ({item}) => {
        return <PageButton style={{alignSelf:'center',marginVertical:2}} title={item.race_name} onPress={() => {}}>
        </PageButton>
    }

    return <FlatList showsVerticalScrollIndicator={false} style={{width:'70%'}} contentContainerStyle={{marginTop:'20%',paddingBottom:'50%'}} data={races} renderItem={renderItem}></FlatList>
}