import React, { useContext, useEffect, useState } from "react"
import { View,Text, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { PageButton } from "../../components/PageButton";
import { DBContext } from "../../geral"









export const TelaDeOther = () => {

    const db = useContext(DBContext);
    const [other,setOther] = useState([] as Array<any>);

    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql('SELECT * FROM items WHERE item_type = Other',[],(tx,result) => {
                setOther(result.rows._array)
            },(tx,err) => {
                console.log(err.message)
                return false;
            })
        })
    })

    return <FlatList data={other} renderItem={({item}) => {
        return <PageButton title={item.item_name}>
            {item.description =! 'null' && (<Text>{item.description}</Text>)}
        </PageButton>
    }}></FlatList>
}