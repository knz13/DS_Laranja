import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"








export const TelaClasseArmor = () => {

    const db = useContext(DBContext)
    const [armor,setArmor] = useState([] as Array<any>)

    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT * FROM armors`,[],(tx,result) => {
                setClasses(result.rows._array);
            })
        })
    })

    return <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
        return <PageButton style={{width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {}}>
        </PageButton>
    }}></FlatList>
}