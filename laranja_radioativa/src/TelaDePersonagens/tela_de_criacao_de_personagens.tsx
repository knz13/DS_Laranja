import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext } from "../geral"
import { AppColors, AppConstants, Styles } from "../styles"
import { LinearGradient } from 'expo-linear-gradient';
import { MainView } from "./../components/MainView";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Animated,{SlideInDown} from "react-native-reanimated";
import { PageButton } from "./../components/PageButton";





export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([]);
    
    const [specificClass,setSpecificClassData] = useState('');
    const db = useContext(DBContext);
    
    useEffect(() => {
        db.readTransaction(tx => {
            tx.executeSql(`SELECT class_name FROM classes`,[],(tx,result) => {
                if(result.rows.length > 0){
                    setClasses(result.rows._array);
                }
            });
        })
    },[])

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

        <View style={{flexDirection: "row",width:'90%',alignItems:'center',justifyContent:'center',marginTop:'25%'}}>
            <PageButton title={'classes'} style={{marginVertical:'2%'}}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>

            <View style={{width:'10%'}}></View>

            <PageButton title={'raças'} style={{}}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>

            
        </View>

        <View style={{flexDirection: "row",justifyContent: 'center',alignItems:'center',width:'90%',marginVertical:'6%'}}>

            <PageButton title={'atributos'} > 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>

            <View style={{width:'10%'}}></View>

            <PageButton title={'proficiências'} > 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>

            
        </View>

        <View style={{flexDirection: "row",justifyContent:'center',alignItems:'center',width:'90%'}}>
        
            <PageButton title={'salvaguardas'} > 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>

            <View style={{width:'10%'}}></View>

            <PageButton title={'perícias'} > 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{marginVertical:'2%'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>
            </PageButton>
        </View>
        
    </MainView>

    
}