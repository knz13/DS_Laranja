import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext } from "./geral"
import { AppColors, AppConstants, Styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';
import { MainView } from "./components/MainView";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Animated,{SlideInDown} from "react-native-reanimated";
import { CreationButton } from "./components/CreationButton";





export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([]);
    const [attributes,setAttributes] = useState([]);
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);
    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT class_name FROM classes`,[],(tx,result) => {
                if(result.rows.length > 0){
                    setClasses(result.rows._array);
                }
            });
            tx.executeSql(`SELECT race_name FROM races`,[],(tx,result) => {
                if(result.rows.length > 0){
                    setRaces(result.rows._array);
                }
            });
        })
    },[])

    // <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
    //     db.readTransaction(tx => {
    //         tx.executeSql(`SELECT ${nome} FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
    //             setSpecificClassData(JSON.stringify(result.rows._array));
    //         })
    //     })

    // }}>
    //     <Text style={{color:'white'}}>{specificClass}</Text>
    // </CreationButton>

    const MostrarDB = ({sql_query,params,data,children}) => {
        return <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
            return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                db.readTransaction(tx => {
                    tx.executeSql(`${sql_query}`,params,(tx,result) => {
                        setSpecificClassData(JSON.stringify(result.rows._array));
                    })
                })

            }}>
                <Text style={{color:'white'}}>{specificClass}</Text>
            </CreationButton>
        }}></FlatList>
    }

    const MyTextInput = () => {
        return <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.marrom}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>
    }

    const NormalText = ({children}) => {
        return <Text style={{color:AppColors.white}}>{children}</Text>
    }

    return <MainView>

        <Text style={{color:AppColors.vermelho_saturado}}>Nome do Personagem</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
            <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
        </View>

        <Text style={{color:AppColors.vermelho_saturado}}>Descrição</Text>
        <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
            <TextInput style={{margin:'3%',color:AppColors.white,height:80}}></TextInput>
        </View>

        <View style={{flexDirection: "row",width:'70%'}}>
            <CreationButton title={'classes'}>
            </CreationButton>

            <View style={{width:'5%'}}></View>

            <CreationButton title={'raças'}> 
            </CreationButton>
        </View>

        <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>

            <CreationButton title={'atributos'}>
            </CreationButton>

            <View style={{width:'5%'}}></View>


            <CreationButton title={'proficiências'}> 
            </CreationButton>

            
        </View>

        <View style={{flexDirection: "row",width:'70%'}}>
        
            <CreationButton title={'salvaguardas'}> 
            </CreationButton>

            <View style={{width:'5%'}}></View>


            <CreationButton title={'perícias'}> 
            </CreationButton>
        </View>
        
    </MainView>

    
}