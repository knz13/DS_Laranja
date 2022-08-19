import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"





export const TelaDeAtributos = () => {

    // const db = useContext(DBContext)
    const [atributos,setAtributos] = useState([] as Array<any>)

    
    // useEffect(() => {
    //     db.readTransaction(tx => {
    //         tx.executeSql(`SELECT * FROM races`,[],(tx,result) => {
    //             setRaces(result.rows._array);
    //         })
    //     })
    // })

    return <MainView>
        <View style={{width:Window.width/1.8}}>
        
        <MainTextInput title="Força" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>
        
        <MainTextInput title="Destreza" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>
        
        <MainTextInput title="Constituição" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>
        
        <MainTextInput title="Inteligência" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>
        
        <MainTextInput title="Sabedoria" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>
        
        <MainTextInput title="Carisma" textInputProps={{keyboardType:'numeric'}} textStyle={{textAlign:'center'}}></MainTextInput>

        
        </View>
    </MainView>
}