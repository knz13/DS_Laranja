import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"





export const TelaDePericias = () => {

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

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Acrobacia</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Arcanismo</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Atletismo</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Atuação</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Enganação</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Furtividade</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>História</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Intimidação</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Intuição</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Investigação</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Lidar com Animais</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Medicina</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Natureza</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Percepção</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Persuasão</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>

        <View style={{height:'3%'}}></View>

        <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Prestidigitação</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Religião</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        <View style={{width:'30%'}}>
            <Text style={{color:AppColors.azul_escuro_fundo,textAlign:'center'}}>Sobrevivência</Text>
            <View style={{borderWidth:1,width:'100%',borderColor:AppColors.azul_escuro_fundo}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
            </View>
        </View>

        </View>


    </MainView>
}