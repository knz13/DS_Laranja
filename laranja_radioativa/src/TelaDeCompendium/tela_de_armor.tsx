import React, { useContext, useEffect, useState } from "react"
import { View,Text, Button, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { PageButton } from "../components/PageButton";
import { DBContext } from "../geral"









export const TelaDeArmor = () => {

    const db = useContext(DBContext);
    const [armors,setArmors] = useState([] as Array<any>);

    useEffect(() => {
        if(armors.length == 0){
            db.readTransaction(tx => {
                tx.executeSql('SELECT * FROM items INNER JOIN armors ON items.item_id = armors.item_id',[],(tx,result) => {
                    setArmors(result.rows._array)
                    console.log('something')
                },(tx,err) => {
                    console.log(err.message)
                    return false;
                })
            })
        }
    })

    return <FlatList contentContainerStyle={{marginTop:'20%'}} data={armors} renderItem={({item}) => {
        return <PageButton title={item.item_name}></PageButton>
    }}></FlatList>
}