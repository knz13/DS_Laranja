import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated , {runOnJS, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

interface AccordionProps {
  headerStyle?:StyleProp<ViewStyle>,
  headerTitle:string,
  children?: React.ReactNode,
  contentStyle?:StyleProp<ViewStyle>,
  maxSize?: number
}

export const Accordion = ({children,headerStyle,headerTitle,contentStyle,maxSize} : AccordionProps) => {

  // Texto inicial
  // clica no texto inicial e abre para mais informações
  const [isOpen,setIsOpen] = useState(false);
  const [isShown,setIsShown] = useState(false);
  const animationHeight = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      height:animationHeight.value
    }
  })

  const StopShowing = () => {
    setIsShown(false);
  }

  useEffect(() => {
    if(isOpen){
      animationHeight.value = withTiming(maxSize? maxSize : 100,{duration:1000});
    }
    else {
      animationHeight.value = withTiming(0,{duration:1000},() => runOnJS(StopShowing)());
    }
  },[isOpen])


  return <>
  <TouchableOpacity onPress={() => {
    isOpen? setIsOpen(false) : setIsOpen(true); setIsShown(true)
  }}>
  <View style={[{borderWidth:1,alignItems:'center',borderRadius:5},headerStyle]}>
    <Text style={{margin:10}}>{headerTitle}</Text>
  </View>
  </TouchableOpacity>
  {/* view de dentro */}
  {isShown && (
  <Animated.View style={[{borderWidth:1,width:'100%'},contentStyle,style]}>
    {children}
  </Animated.View>
  )}
  </>
}

