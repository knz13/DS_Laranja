import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"





export const TelaInfoSecundaria = () => {

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

                <Text style={{color:AppColors.azul_escuro_fundo}}>Classe da Armadura</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Iniciativa</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Deslocamento</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>PV Atuais</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>PV Temporários</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Inspiração</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Bônus de Proficiência</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>
    </MainView>
}