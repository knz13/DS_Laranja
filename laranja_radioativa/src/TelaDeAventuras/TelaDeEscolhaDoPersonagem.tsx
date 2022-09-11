import { useIsFocused, useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useContext, useEffect, useRef, useState } from "react"
import { FlatList, View,Text } from "react-native"
import { MainTextInput } from "../components/MainTextInput"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { GlobalContext, Hash, Window } from "../geral"






export const TelaDeEscolhaDoPersonagem = (props: NativeStackScreenProps<{}>) => {
    const global = useContext(GlobalContext)
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [personagens,setPersonagens] = useState([]);

    useEffect(() => {
        if(isFocused){
            fetch('https://dnd-party.herokuapp.com/database/character',{
                method:'GET',
                headers:{
                    'x-access-token':global.token
                }
            }).then(response => response.json()).then(json => {
                setPersonagens(JSON.parse(json['message']))
            })
        }
    },[isFocused])

    const RenderItem = ({item}) => {
        return <View>
            <PageButton style={{width:'90%',margin:'10%'}} title={item.nome} onPress={() => {
                //lidar com isso depois
                fetch(`https://dnd-party.herokuapp.com/database/rooms/entrar/${props.route.params.room_id}/${item.id_do_personagem}`,{
                    method:'POST',
                    headers:{
                        'x-access-token':global.token
                    }
                }).then(response => response.json()).then(json => {
                    if(json['state'] == 'success'){
                        navigation.navigate('Jogo/Jogador/Principal',props.route.params)
                    }
                    else {
                        alert(json['message'])
                    }
                })
            }}>
                <View style={{position:'absolute',left:10,justifyContent:'center',height:'100%'}}>
                    <Text style={{fontSize:20,fontFamily:'inter',color:'white'}}>{item.nivel}</Text>     
                </View>
                <Text style={{alignSelf:'center'}}>sala atual: {item.room_id?.valueOf() != null? item.room_id : 'nenhuma'}</Text> 
            </PageButton>
        </View>
    }

    return <MainView>
        <FlatList data={personagens}  style={{width:'100%'}} contentContainerStyle={{marginVertical:'20%'}} renderItem={({item}) => <RenderItem item={item}></RenderItem>}></FlatList>
        <PageButton style={{position:'absolute',bottom:Window.height/10,width:Window.width/2}} title={'Criar'} onPress={() => {
            navigation.navigate('Personagens/Criacao')
        }}></PageButton>
    </MainView>
}