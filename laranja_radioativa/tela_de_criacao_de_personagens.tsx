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

        <View style={{flexDirection: "row",justifyContent: 'space-between',}}>
            <CreationButton title={'classes'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>

            <CreationButton title={'raças'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>

            
        </View>

        <View style={{flexDirection: "row",justifyContent: 'space-between',justifyContent:'center',alignItems:'center'}}>

            <CreationButton title={'atributos'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>

            <CreationButton title={'proficiências'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>

            
        </View>

        <View style={{flexDirection: "row",justifyContent: 'space-between',justifyContent:'center',alignItems:'center'}}>
        
            <CreationButton title={'salvaguardas'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>

            <CreationButton title={'perícias'}> 
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <CreationButton style={{backgroundColor:'red',width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM classes WHERE class_name=?`,[item.class_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </CreationButton>
                }}></FlatList>
            </CreationButton>
        </View>
        
    </MainView>

    
}