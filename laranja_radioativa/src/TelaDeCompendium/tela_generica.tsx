import React, { useContext } from "react"
import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { PageButton } from "../components/PageButton";
import { Compendium_Context } from "./tela_de_compendium";

interface subtelaInterface {
    type:string,
    children?:React.ReactNode
  }

export const SubTela_Button = ({type}: subtelaInterface) => {
    const compendium_Context = useContext(Compendium_Context) 
    

    const renderItem = ({item}) => {
        return <PageButton style={{margin:'2%'}} title={item.item_name}>
            {item.description =! 'null' && (<Text>{item.description}</Text>)}
        </PageButton>
    }

    return <FlatList style={{width:'75%'}} data={compendium_Context[type]} renderItem={renderItem}></FlatList>
}