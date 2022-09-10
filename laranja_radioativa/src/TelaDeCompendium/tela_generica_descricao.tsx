import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react"
import { useEffect } from "react";
import { Text, View, ScrollView } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { DBContext, GlobalContext } from "../geral";
import { AppColors } from "../styles";


  export const TelaGenericaCompendiumDescricao = (prop: NativeStackScreenProps<{},'Compendium/TelaGenerica/TelaDescricaoGenerica'>) => {
    
    return <ScrollView contentContainerStyle={{paddingBottom:'20%',paddingTop:'20%'}} style={{flex:1,
      alignSelf:'center',
      width:'100%',
      backgroundColor:AppColors.azul_escuro_fundo}}>
      {prop.route.params.description != 'null' && 
      <View>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 50,marginRight:'10%'}}>{prop.route.params.item_name}</Text>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%'}}>Description</Text>
      <View style={{borderColor:AppColors.preto, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{backgroundColor:AppColors.azul_escuro_extra, padding:'05%'}}> {prop.route.params.description}</Text>
      </View>
      </View>}
      {prop.route.params['rarity'] && 
      <View>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%'}}>Rarity</Text>
      <View style={{borderColor:AppColors.preto, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{backgroundColor:AppColors.azul_escuro_extra, padding:'05%'}}> {prop.route.params.rarity}</Text>
      </View>
      </View>}
      {prop.route.params['price'] && 
      <View>
      <Text style={{alignContent:'center',color:AppColors.azul,marginLeft: '10%',textAlign:'left',fontSize: 20,marginRight:'10%',marginTop:'15%'}}>Price</Text>
      <View style={{borderColor:AppColors.preto, borderWidth: 2, marginLeft: '10%',marginRight:'10%',marginBottom:'5%',marginTop:'2.5%'}}>
        <Text style={{backgroundColor:AppColors.azul_escuro_extra, padding:'05%'}}> {prop.route.params.price}</Text>
      </View>
      </View>}
      </ScrollView>
  }