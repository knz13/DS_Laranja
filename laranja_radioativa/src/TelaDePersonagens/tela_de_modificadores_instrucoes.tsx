import React, { useContext, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PopupCard } from "../components/PopupCard"
import { AlertPopup } from "../components/AlertPopup"





export const TelaDeModificadoresInstrucoes = () => {

    return <MainView>
        <View style={{width:Window.width/1.3,alignItems:'center'}}>
        
            <Text style={{color:'white',fontSize: 22,textAlign:'justify',fontFamily:'inter'}}>
                Se lembra dos valores de atributos determinados anteriormente? Eles serão cruciais
                para determinar os modificadores de seu personagem!
            </Text>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: AppColors.azul,fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                {"\n"}Atributo
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: AppColors.azul,fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                {"\n"}Modificador
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                {"\n"}1
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                {"\n"}-5
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                2 - 3
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                -4
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                4 - 5
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                -3
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                6 - 7
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                -2
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                8 - 9
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                -1
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                10 - 11
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                0
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                12 - 13
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +1
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                14 - 15
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +2
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                16 - 17
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +3
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                18 - 19
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +4
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                20 - 21
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +5
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                22 - 23
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +6
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                24 - 25
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +7
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                26 - 27
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +8
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                28 - 29
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +9
                </Text>
                </View>
            </View>

            <View style={{flexDirection:'row',width:Window.width/1.3,justifyContent:'space-between'}}>
                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'left',fontFamily:'inter'}}>
                30
                </Text>
                </View>

                <View style={{width:'50%'}}>
                <Text style={{color: 'white',fontSize: 20,textAlign:'right',fontFamily:'inter'}}>
                +10
                </Text>
                </View>
            </View>

        </View>
    </MainView>
}