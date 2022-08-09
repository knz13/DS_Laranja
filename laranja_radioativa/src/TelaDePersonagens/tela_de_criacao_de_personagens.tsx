import React, { useContext, useEffect, useState } from "react"
import { View,Text, TouchableOpacity } from "react-native"
import { DBContext } from "./../geral"
import { AppColors, AppConstants, Styles } from "./../styles"
import { LinearGradient } from 'expo-linear-gradient';
import { MainView } from "./../components/MainView";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import Animated,{SlideInDown} from "react-native-reanimated";
import { PageButton } from "./../components/PageButton";
import { SafeAreaView } from "react-navigation";
import { TelaDeClasses } from "./tela_de_classes";





export const TelaDeCriacaoDePersonagens = () => {
    const [classes,setClasses] = useState([{}]);
    const [races,setRaces] = useState([{}]);
    const [attributes,setAttributes] = useState([{}]);
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

    const textoDosBotoes = ['classes','raças','atributos','proficiências','salvaguardas','perícias','informações secundárias','informações adicionais']

    const renderizarDentroDoBotao = (nome : string) => {
        if(nome == "classes") {
            return <TelaDeClasses></TelaDeClasses>
        }
        return <View></View>
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

        {[...Array(textoDosBotoes.length/2)].map((item,index) => {
            return <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>
                <PageButton title={textoDosBotoes[index]}>{renderizarDentroDoBotao(textoDosBotoes[index])}</PageButton>
                <View style={{width:'5%'}}></View>
                <PageButton title={textoDosBotoes[index+1]}>{renderizarDentroDoBotao(textoDosBotoes[index+1])}</PageButton>
            </View>
        })}

        <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>
            <PageButton title={'classes'}>
                
                <FlatList style={{width:'70%',marginTop:'10%'}} data={classes} renderItem={({item}) => {
                    return <PageButton style={{width:'80%',alignSelf:'center'}} title={item.class_name} onPress={() => {
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

            <View style={{width:'5%'}}></View>

            <PageButton title={'raças'}> 

                <FlatList style={{width:'70%',marginTop:'10%'}} data={races} numColumns={2} renderItem={({item}) => {
                    return <PageButton style={{width:'100%',alignSelf:'center'}} title={item.race_name} onPress={() => {
                        db.readTransaction(tx => {
                            tx.executeSql(`SELECT * FROM 'races' WHERE race_name=?`,[item.race_name],(tx,result) => {
                                setSpecificClassData(JSON.stringify(result.rows._array));
                            })
                        })

                    }}>
                        <Text style={{color:'white'}}>{specificClass}</Text>
                    </PageButton>
                }}></FlatList>

            </PageButton>
        </View>

        <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>

            <PageButton title={'atributos'}>

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

            </PageButton>

            <View style={{width:'5%'}}></View>


            <PageButton title={'proficiências'}> 
            </PageButton>

            
        </View>

        <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>
        
            <PageButton title={'salvaguardas'}> 
            </PageButton>

            <View style={{width:'5%'}}></View>


            <PageButton title={'perícias'}> 

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Acrobacia</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Arcanismo</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Atletismo</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{height:'3%'}}></View>

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Atuação</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Enganação</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Furtividade</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{height:'3%'}}></View>

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>História</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Intimidação</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Intuição</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{height:'3%'}}></View>

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Investigação</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Lidar com Animais</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Medicina</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{height:'3%'}}></View>

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Natureza</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Percepção</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Persuasão</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>

                <View style={{height:'3%'}}></View>

                <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Prestidigitação</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Religião</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>
                    
                    <View style={{width:'30%'}}>
                        <Text style={{color:AppColors.vermelho_saturado,textAlign:'center'}}>Sobrevivência</Text>
                        <View style={{borderWidth:1,width:'100%',borderColor:AppColors.vermelho_saturado}}>
                        <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                        </View>
                    </View>

                </View>
            
            </PageButton>
        </View>

        <View style={{flexDirection: "row",width:'70%',marginVertical:'2%'}}>
        
            <PageButton title={'informações secundárias'}> 
                
                <Text style={{color:AppColors.vermelho_saturado}}>Classe da Armadura</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Iniciativa</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Deslocamento</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>PV Atuais</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>PV Temporários</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Inspiração</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Bônus de Proficiência</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

            </PageButton>

            <View style={{width:'5%'}}></View>


            <PageButton title={'informações adicionais'}> 

                <Text style={{color:AppColors.vermelho_saturado}}>Traços de Personalidade</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                    <TextInput style={{margin:'3%',color:AppColors.white,height:80}}></TextInput>
                </View>
                
                <Text style={{color:AppColors.vermelho_saturado}}>Ideais</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Ligações</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Defeitos</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Aparência do Personagem</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>História</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Aliados e Organizações</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View>

                <Text style={{color:AppColors.vermelho_saturado}}>Informações Adicionais/Outros</Text>
                <View style={{borderWidth:1,margin:'3%',width:'70%',borderColor:AppColors.vermelho_saturado}}>
                <TextInput style={{margin:'3%',color:AppColors.white}}></TextInput>
                </View> 
            </PageButton>
        </View>
        
    </MainView>

    
}