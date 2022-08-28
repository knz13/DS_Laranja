import React, { useContext, useEffect, useState } from "react"
import { FlatList } from "react-native"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"








export const TelaDeClasses = () => {

    const db = useContext(DBContext)
    const [classes,setClasses] = useState([] as Array<any>)

    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT * FROM classes`,[],(tx,result) => {
                setClasses(result.rows._array);
            })
        })
    })

    const renderItem = ({item}) => {
        return <PageButton style={{marginVertical:2,alignSelf:'center'}} title={item.class_name}>
        </PageButton>
    }

    return <FlatList showsVerticalScrollIndicator={false} style={{width:'70%'}} contentContainerStyle={{paddingTop:'20%',paddingBottom:'20%'}} data={classes} renderItem={renderItem}></FlatList>
}