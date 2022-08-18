import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated"





export const TelaDePericias = () => {

    // const db = useContext(DBContext)
    const [atributos,setAtributos] = useState([] as Array<any>)
    const selected = useSharedValue([-1]);

    const pericias = [`Acrobacia (Des)`,
    `Adestrar Animal (Sab)`,
    `Arcana (Int)`,
    `Atletismo (For)`,
    `Atuação (Cha)`,
    `Furtividade (Des)`,
    `História (Int)`,
    `Intimidação (Car)`,
    `Medicina (Int)`,
    `Natureza (Int)`,
    `Percepção (Sab)`,
    `Persuasão (Cha)`,
    `Prestidigitação (Dex)`,
    `Procurar (Int)`,
    `Religião (Int)`,
    `Sentir Motivação (Sab)`,
    `Sobrevivência (Sab)`,
    `Trapacear (Cha)`];

    const RenderizarPericia = ({item,index}) => {
        
        const bolinhaStyle = useAnimatedStyle(() => {
            return {
                borderRadius:15,
                width:30,
                height:30,
                borderWidth:1,
                left:0,
                backgroundColor: selected.value.includes(index) ? 'white' : 'black'
            }
        })


        return <TouchableOpacity onPress={() => {
            console.log(selected.value)
            if(!selected.value.includes(index)){
                selected.value.push(index)
            }
            else {
                selected.value = selected.value.filter((item) => {
                    return item != index;
                })
            }
        }}><Animated.View style={{borderRadius:15,borderWidth:1}}>
            <Animated.View style={{flexDirection:'row',alignItems:'center',margin:'5%'}}>
                <Animated.View style={bolinhaStyle}></Animated.View>
                <Text style={{textAlign:'center',color:AppColors.laranja_radioativo}}>  {item}</Text>
            </Animated.View>
        </Animated.View>
        </TouchableOpacity>
    }

    return <MainView>

        <FlatList showsVerticalScrollIndicator={false} data={pericias} renderItem={({item,index}) => <RenderizarPericia item={item} index={index}></RenderizarPericia>}></FlatList>


        {/* <View style={{flexDirection:'row',width:'80%',justifyContent:'space-between'}}>

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

        </View> */}


    </MainView>
}