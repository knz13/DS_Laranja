import React, { useContext, useEffect, useState } from "react"
import { View } from "react-native"
import { DBContext } from "../geral"









export const TelaDeArmor = () => {

    const db = useContext(DBContext);
    const [armors,setArmors] = useState([] as Array<any>);

    db.readTransaction(tx => {
        tx.executeSql('SELECT * FROM items',[],(tx,result) => {
            console.log('result')
        },(tx,err) => {
            console.log(err.message)
            return false;
        })
    })



    return <View></View>
}