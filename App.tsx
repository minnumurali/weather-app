import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import CountryScreen from './components/CountryScreen';
import CapitalWeather from './components/CapitalWeather';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack : any = createNativeStackNavigator()



export default function App() {
  const [inputValue,setInputValue]=useState("")
  return (
    <>
        <StatusBar style="auto" />

       
    
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home" component={Home}/>  
             <Stack.Screen
            name="CountryDetails" component={CountryScreen}/>
            <Stack.Screen
            name="CapitalWeather" component={CapitalWeather}/>
         </Stack.Navigator>
    </NavigationContainer>
    
   
  </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

