import React, { useContext, useEffect, useState } from "react"
import { View,Text, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { PageButton } from "../components/PageButton";
import { DBContext } from "../geral"









export const TelaDeArmor = () => {

    const db = useContext(DBContext);
    const [armors,setArmors] = useState([] as Array<any>);

    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql('SELECT * FROM items INNER JOIN armors ON items.item_id = armors.item_id',[],(tx,result) => {
                setArmors(result.rows._array)
            },(tx,err) => {
                console.log(err.message)
                return false;
            })
        })
    })

    return <FlatList horizontal data={armors} renderItem={({item}) => {
        return <PageButton title={item.item_name}>
            <View style={{backgroundColor:'blue'}}>
                <Text>{item.description}</Text>
            </View>
        </PageButton>
    }}></FlatList>
}