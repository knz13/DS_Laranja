import React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle,Text} from "react-native"
import { AppColors } from "../styles"
import { CreationButton } from "./CreationButton"
import { MainView } from "./MainView"
import BackButton from '../components/BackButton'
import { Window } from "../geral"




interface PageButtonInterface {
    title:string,
    children?:React.ReactNode,
    textStyle?:StyleProp<TextStyle>,
    style?:StyleProp<ViewStyle>,
    onPress?: () => void,
    mainViewStyle?:StyleProp<ViewStyle>,
    shouldGoBack?: boolean,
}


export const PageButton = ({title,children,textStyle,style,onPress,mainViewStyle,shouldGoBack}:PageButtonInterface) => {
    return <CreationButton shouldGoBack={shouldGoBack} 
    headerRender={(backFunc) => {
        return <View style={{width:'100%',height:'13%',top:0,backgroundColor:AppColors.azul_escuro_fundo,borderBottomWidth:1,borderBottomColor:'white'}}>
            <View style={{height:'50%'}}></View>
            <View style={{flexDirection:'row',alignSelf:'center',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{alignSelf:'center',alignItems:'center',position:'absolute',left:Window.width/15,width:Window.width/15,height:Window.width/15,transform:[{scaleX:-1}]}} onPress={() => {
                        backFunc()
                    }}>
                        <BackButton fill={AppColors.azul}></BackButton>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:25,alignSelf:'center',fontFamily:'inter'}}>{title}</Text>
                <Text style={{position:'absolute',right:Window.width/15}}></Text>
            </View>
        </View>
    }}
    style={[{backgroundColor:AppColors.azul,borderRadius:15},style]} textStyle={[{fontFamily:'inter',color:'white',fontSize:17},textStyle]} onPress={onPress} title={title}>{children && <MainView style={mainViewStyle}>
            {children}
        </MainView>}</CreationButton>
}