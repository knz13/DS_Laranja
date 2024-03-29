import { NavigationProp, useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react"
import { useEffect } from "react";
import { Text, View, ScrollView } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { DBContext, GlobalContext } from "../geral";
import { AppColors } from "../styles";


  export const TelaGenericaCompendiumDescricao = (prop: NativeStackScreenProps<{},'Compendium/TelaGenerica/TelaDescricaoGenerica'>) => {
    
    const isFocused = useIsFocused();
    const [item,setItem] = useState({});
    const globalContext = useContext(GlobalContext);

    useEffect(() => {
      if(isFocused){
        const arr = globalContext.compendium_items[prop.route.params.type] as Array<any>
        arr.forEach(val => {
          if(val.item_id == prop.route.params.id){
            setItem(val);
          }
        })
      }
    },[isFocused])

    
    return <ScrollView contentContainerStyle={{paddingBottom:'20%',paddingTop:'20%'}} style={{flex:1,
      alignSelf:'center',
      width:'100%',
      backgroundColor:AppColors.azul_escuro_fundo}}>

      {item.description != null && 
      <View>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 50,marginRight:'10%',fontFamily:'inter'}}>{item.item_name}</Text>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%',fontFamily:'inter'}}>Description</Text>
      <View style={{borderColor:AppColors.azul,borderRadius:15,backgroundColor:AppColors.azul_escuro_extra, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{padding:'05%',color:AppColors.white,fontFamily:'inter'}}> {item.description}</Text>

      </View>
      </View>}
      {item['rarity'] && 
      <View>

      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%',fontFamily:'inter'}}>Rarity</Text>
      <View style={{borderColor:AppColors.azul,borderRadius:15,backgroundColor:AppColors.azul_escuro_extra, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{padding:'05%',color:AppColors.white,fontFamily:'inter'}}> {item.rarity}</Text>

      </View>
      </View>}
      {item['price'] && 
      <View>

      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%',fontFamily:'inter'}}>Price</Text>
      <View style={{borderColor:AppColors.azul,borderRadius:15,backgroundColor:AppColors.azul_escuro_extra, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{padding:'05%',color:AppColors.white,fontFamily:'inter'}}> {item.price}</Text>

      </View>
      </View>}
      </ScrollView>
  }