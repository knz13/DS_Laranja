import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createContext, useContext, useReducer, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { Database } from 'expo-sqlite';
import * as Crypto from 'expo-crypto';
import { Dimensions } from 'react-native';


export interface Props {
    navigation: NavigationProp<any, any>;
}
  
export const Hash = async (password : string) => {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
    );
    return digest;
}

export const Window = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
};

export const useUpdate = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    return forceUpdate;
}

export const GlobalContext = createContext({token:null as string,compendium_items: null as Object})

export const DBContext = createContext(null as SQLite.WebSQLDatabase);