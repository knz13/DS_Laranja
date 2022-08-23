
import React, { createContext } from 'react';
import { StyleSheet } from 'react-native';
import { AppColors } from "../styles";
import { MainView } from "../components/MainView";
import { PageButton } from "../components/PageButton";
import { SubTela_Button } from "./tela_generica";
import { useContext } from 'react';
import { DBContext, Window } from '../geral';
import { View } from 'react-native';


//style dos buttons
const styles1 = StyleSheet.create({button:{
    backgroundColor:AppColors.azul,marginHorizontal:'2%',marginVertical:'1%',borderRadius:6,width:Window.width*0.75}
})

export const Compendium_Context = createContext({})


export const TelaDeCompendium = () => {
    const item_types = ['Armor','Weapon','Adventuring Gear','Tools','Poisons','Potions and Oils','Wondrous Item','Other']
    const db = useContext(DBContext)


    return <MainView>
            <Compendium_Context.Provider value={(()=>{     
                    let dict = {}
                    item_types.map((type) => {

                    db.readTransaction(tx => {
                        tx.executeSql('SELECT * FROM items WHERE item_type = ?',[type],(tx,result) => {
                            dict[type] = (result.rows._array)},(tx,err) => {
                            console.log(err.message)
                            return false; })
                    })})
                    return dict
            })()}>
                <View style={{flex:0.75,width:Window.width*0.75}}>
                {item_types.map(type => <PageButton title={type} style={styles1.button} >
                    <SubTela_Button type={type} />

                </PageButton>)}
                </View>  
            </Compendium_Context.Provider> 
    </MainView>
}
