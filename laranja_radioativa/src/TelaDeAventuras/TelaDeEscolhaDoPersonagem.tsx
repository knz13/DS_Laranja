import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useContext, useRef } from "react"
import { View } from "react-native"
import { MainTextInput } from "../components/MainTextInput"
import { MainView } from "../components/MainView"
import { PageButton } from "../components/PageButton"
import { GlobalContext, Hash } from "../geral"






export const TelaDeEscolhaDoPersonagem = (props: NativeStackScreenProps<{}>) => {
    const global = useContext(GlobalContext)
    const navigation = useNavigation();
    return <MainView>
        
    </MainView>
}