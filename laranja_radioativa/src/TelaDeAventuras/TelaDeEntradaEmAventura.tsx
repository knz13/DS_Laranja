import { useNavigation } from "@react-navigation/native"
import { useContext, useRef } from "react"
import { View } from "react-native"
import { MainTextInput } from "../components/MainTextInput"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { GlobalContext, Hash } from "../geral"






export const TelaDeEntradaEmAventura = () => {
    const global = useContext(GlobalContext)
    let roomName = useRef('').current
    let roomPassword = useRef('').current
    const navigation = useNavigation();
    return <MainView>
    <View style={{width:'80%'}}>
    <View style={{height:'20%'}}></View>
    <MainTextInput title={'Nome da Sala'} onChangeText={(text) => roomName = text}></MainTextInput>
    <MainTextInput title={'Senha'} onChangeText={(text) => roomPassword = text}></MainTextInput>
    <PageButton title={'Criar'} onPress={() => {
        Hash(roomPassword).then(hash => {
            fetch('https://dnd-party.herokuapp.com/database/rooms/entrar',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                    'x-access-token':global.token
                },
                body:JSON.stringify({room_name:roomName,room_password_hash:hash})
            }).then((res) => res.json()).then((json) => {
                if(json['state'] == 'success'){
                    const result = JSON.parse(json['message']);
                    if(result.type == 'M') {
                        navigation.navigate('Jogo/Mestre/Principal',{room_id:result.room_id});
                    }
                    else {
                        navigation.navigate('Jogo/Player/Principal',{room_id:result.room_id})
                    }
                }
                else {
                    alert(json['message'])
                }
            })
        })
    }} style={{alignSelf:'center'}}></PageButton>
</View>
</MainView>
}