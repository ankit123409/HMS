import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splacescreen from "../screens/spalceScreen.jsx/splacescreen /splacescreen";
import Home from "../screens/home/Home"

import {Text,View} from "react-native";
const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splacescreen" component={Splacescreen} />
          <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
      </NavigationContainer> 
    )
}
export  default Navigation;