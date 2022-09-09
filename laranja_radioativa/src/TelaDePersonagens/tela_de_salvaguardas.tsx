import React, { useContext, useRef, useState } from "react"
import { PageButton } from "../components/PageButton"
import { DBContext, Window } from "../geral"
import { AppColors } from "../styles"
import { View,Text, TouchableOpacity } from "react-native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { MainView } from "../components/MainView"
import { MainTextInput } from "../components/MainTextInput"
import { PopupCard } from "../components/PopupCard"
import { AlertPopup } from "../components/AlertPopup"
import { useNavigation } from "@react-navigation/native"





export const TelaDeSalvaguardas = () => {

    const navigation = useNavigation();

    return <MainView>
        
    </MainView>
}