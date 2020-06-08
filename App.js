import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/PersonNavigator';


const getFonts = () => Font.loadAsync({
    'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf')
  })


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(fontLoaded){
  return (
    <NavigationContainer> 
    <Navigator/>
    </NavigationContainer>
  );
  } else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontLoaded(true)}
    />
    )
  }
}


