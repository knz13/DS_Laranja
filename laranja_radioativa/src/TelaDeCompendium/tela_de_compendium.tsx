
import React, { createContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { AppColors } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { SubTela_Button } from "./tela_generica";
import { useContext } from 'react';
import { DBContext, GlobalContext, Window } from '../geral';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


//style dos buttons
const styles1 = StyleSheet.create({button:{
    backgroundColor:AppColors.azul,marginHorizontal:'2%',marginVertical:'1%',borderRadius:6,width:Window.width*0.75}
})



export const TelaDeCompendium = () => {
    const item_types = ['Armor','Weapon','Adventuring Gear','Tools','Poisons','Potions and Oils','Wondrous Item','Other']
    const db = useContext(DBContext)
    const global = useContext(GlobalContext);
    const navigation = useNavigation();

    useEffect(() => {
        let dict = {}
        item_types.map((type) => {
        switch(type){
            case 'Armor':
                db.readTransaction(tx => {
                    tx.executeSql('SELECT * FROM items INNER JOIN armors ON armors.item_id = items.item_id',[type],(tx,result) => {
                        dict[type] = (result.rows._array)},(tx,err) => {
                        console.log(err.message)
                        return false; })
                });
            case 'Weapon':
                db.readTransaction(tx => {
                    tx.executeSql('SELECT * FROM items INNER JOIN weapons ON weapons.item_id = items.item_id',[type],(tx,result) => {
                        dict[type] = (result.rows._array)},(tx,err) => {
                        console.log(err.message)
                        return false; })
                });
                

            default:
                db.readTransaction(tx => {
                    tx.executeSql('SELECT * FROM items WHERE item_type = ?',[type],(tx,result) => {
                        dict[type] = (result.rows._array)},(tx,err) => {
                        console.log(err.message)
                        return false; })
                })
        }
        })
        global.compendium_items = dict;
    })
    return <MainView>
            <View style={{flex:0.75,width:Window.width*0.75}}>
            {item_types.map(type => <PageButton title={type} style={styles1.button} onPress={() => {
                navigation.navigate('Compendium/TelaGenerica',{type:type})
            }}></PageButton>)}
            </View>
    </MainView>
}
