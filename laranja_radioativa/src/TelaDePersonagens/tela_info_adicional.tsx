import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"





export const TelaInfoAdicional = () => {

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

                <Text style={{color:AppColors.azul_escuro_fundo}}>Traços de Personalidade</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                    <TextInput style={{margin:'3%',color:AppColors.white,height:80}}></TextInput>
                </View>
                
                <Text style={{color:AppColors.azul_escuro_fundo}}>Ideais</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Ligações</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Defeitos</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Aparência do Personagem</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>História</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Aliados e Organizações</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.azul_escuro_fundo}}>Informações Adicionais/Outros</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.azul_escuro_fundo}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View> 
    </MainView>
}