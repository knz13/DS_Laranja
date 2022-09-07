import { useNavigation } from "@react-navigation/native"
import { useContext, useRef } from "react"
import { View } from "react-native"
import { MainTextInput } from "../components/MainTextInput"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { GlobalContext } from "../geral"






export const TelaDeAdicaoDeSalas = () => {
    const global = useContext(GlobalContext)
    let roomName = useRef('').current
    const navigation = useNavigation();
    return <MainView>
    <View style={{width:'100%'}}>
    <View style={{height:'40%'}}></View>
    <MainTextInput title={'Nome da Sala'} onChangeText={(text) => roomName = text}></MainTextInput>
    <PageButton title={'Criar'} onPress={() => {
        fetch('https://dnd-party.herokuapp.com/database/rooms',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                'x-access-token':global.token
            },
            body:JSON.stringify({room_name:roomName})
        }).then((res) => res.json()).then((json) => {
            if(json['state'] == 'success'){
                alert('room created!')
                navigation.navigate('Aventuras');
            }
            else {
                alert(JSON.stringify(json))
            }
        })
    }} style={{alignSelf:'center'}}></PageButton>
</View>
</MainView>
}