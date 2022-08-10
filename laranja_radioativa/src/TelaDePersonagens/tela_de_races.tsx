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

    return <FlatList style={{width:'70%',marginTop:'10%'}} data={races} renderItem={({item}) => {
        return <PageButton style={{width:'80%',alignSelf:'center'}} title={item.race_name} onPress={() => {}}>
        </PageButton>
    }}></FlatList>
}