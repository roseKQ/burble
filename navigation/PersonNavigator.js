import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PersonList from '../screens/PersonList';
import PersonDetail from '../screens/PersonDetail';


const Stack = createStackNavigator();

export default function Navigator() {
  return (
   
      <Stack.Navigator initialRouteName='PersonList'>
        <Stack.Screen 
        name='PersonList' 
        component={PersonList} 
        options={{ title: 'Infinite List of People' }}/>
        <Stack.Screen 
        name='PersonDetail' 
        component={PersonDetail} 
        options={{ title: 'Person Details' }}/>
      </Stack.Navigator>
   
  );
}




