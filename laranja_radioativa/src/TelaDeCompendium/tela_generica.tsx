import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react"
import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { GlobalContext } from "../geral";

interface subtelaInterface {
    type:string,
    children?:React.ReactNode
  }

export const TelaGenericaCompendium = (prop: NativeStackScreenProps<{},'Compendium/TelaGenerica'>) => {
    
    const global = useContext(GlobalContext);
    const navigation = useNavigation();
    const renderItem = ({item}) => {
        return <PageButton style={{margin:'2%'}} title={item.item_name} onPress={ () => navigation.navigate('Compendium/TelaGenerica/TelaDescricaoGenerica',{type:item.item_type,id:item.item_id})}/>
    }

    return <MainView>
        <FlatList showsVerticalScrollIndicator={false} style={{width:'75%'}} contentContainerStyle={{paddingBottom:'20%',paddingTop:'20%'}} data={global.compendium_items[prop.route.params['type']]} renderItem={renderItem}></FlatList>
</MainView>
}