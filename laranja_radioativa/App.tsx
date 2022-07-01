import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from 'react';
import { StyleSheet,Switch, Text, View,Button, TextInput,TouchableOpacity, Pressable,Keyboard, TouchableHighlight, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { NavigationContainer,NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AppContext = React.createContext({});

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>

function HubScreen({navigation}: Props){

  return (
  <View style={{flex:1,flexDirection:'column',alignSelf:'center'}}>
    <View style={{padding:50,flex:0.7,alignSelf:'center'}}>
    </View>
    <TouchableOpacity>
      <View style={{borderWidth:5,borderRadius:10,alignSelf:'center'}}>
        <Text style={{fontSize:20}}>Click me!</Text>

      </View>
    </TouchableOpacity>
  </View>);



}

function MainScreen(){
  return (
  <Tab.Navigator>
    <Tab.Screen name={"Hub"} component={HubScreen}></Tab.Screen>
  </Tab.Navigator>);
}


function CheckLogin(navigation){
  navigation.navigate('Main');
}

function LoginScreen({navigation} : Props){

  const [loginValue,setLoginValue] = useState('');
  const [passValue,setPassValue] = useState('');

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={{flex:1,alignSelf:'center',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <View style={{alignItems:'center',flexDirection:'column',width:'100%'}}>
          <View style={styles.view}>
            <Text>Matrícula</Text>
          </View>
          
            <View style={{borderRadius:5,borderWidth:2,padding:5,alignSelf:'center',width:'50%'}}>
              <TextInput style={{padding:10,borderBottomWidth:2}} textAlign={'left'} editable onChangeText={val => setLoginValue(val)}></TextInput>
            </View>
        </View>
        <View style={{alignItems:'center',flexDirection:'column',width:'100%'}}>
          <View style={styles.view}>
            <Text>Senha</Text>
          </View>
          
            <View style={{borderRadius:5,borderWidth:2,padding:5,alignSelf:'center',width:'50%'}}>
              <TextInput style={[styles.view,{borderBottomWidth:2}]} textAlign={'left'} editable onChangeText={val => setPassValue(val)}></TextInput>
            </View>
        </View>
        <TouchableOpacity onPress={() => {CheckLogin(navigation)}}>
          <View style={[styles.view,{padding:'10%'}]}>
            <View style={[styles.view,{borderWidth:5,width:'20%',alignSelf:'center',borderRadius:5,backgroundColor:'rgb(128,167,255)'}]}>
              <Text>Login</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
    
  );
};

export default function App() {
  const [loginDone,setLoginDone] = useState(false);

  const state = {loginDone,setLoginDone};

  

  return (
    <AppContext.Provider value={state}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={loginDone? 'Home' : "Login"}
          screenOptions={{
            headerStyle: {backgroundColor: "rgb(20,20,90)"},
            headerTintColor: 'rgb(255,255,255)',
          }}
        >
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="Main" options={{headerShown:false,gestureEnabled:false,headerLeft: () => <></>}} component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>);

}


const styles = StyleSheet.create({
  
  view: {
    alignItems:'center',
    padding:10,
  },
});
