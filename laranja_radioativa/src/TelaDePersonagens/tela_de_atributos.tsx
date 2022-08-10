import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"





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

        <Text style={{color:AppColors.vermelho_saturado}}>Força</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Destreza</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Constituição</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Inteligência</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Sabedoria</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Carisma</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

    </MainView>
}