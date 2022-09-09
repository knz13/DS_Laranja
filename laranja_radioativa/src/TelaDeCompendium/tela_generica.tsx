import { NavigationProp } from "@react-navigation/native";
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
    const renderItem = ({item}) => {
        return <PageButton style={{margin:'2%'}} title={item.item_name}>
            {item.description =! 'null' && (<Text>{item.description}</Text>)}
        </PageButton>
    }

    return <MainView>
        <FlatList showsVerticalScrollIndicator={false} style={{width:'75%',paddingTop:'20%'}} data={global.compendium_items[prop.route.params['type']]} renderItem={renderItem}></FlatList>
</MainView>
}