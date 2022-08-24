import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splacescreen from "../screens/spalceScreen.jsx/splacescreen /splacescreen";
import Home from "../screens/home/Home";
import Opd from "../screens/Opd/opd";
import Satff from "../screens/staff/staff";
import Pharma from "../screens/Pharma/pharma";
import Doctor from "../screens/Doctor/Doctor";
// import Accountant from "../screens/accountent/Accountant";
import Ipd from '../screens/Ipd/ipd';




import {Text,View} from "react-native";
const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          options={{
            headerShown: false

          }}
         
          name="Splacescreen" component={Splacescreen} />
          <Stack.Screen name="Home"
           options={{
            title:"Home",
            headerBackVisible:false

          }} component={Home} />
          <Stack.Screen name="Opd"
           
            component={Opd} />
              <Stack.Screen name="Satff"
           
           component={Satff} />
             <Stack.Screen name="Pharma"
           
           component={Pharma} />
           
            <Stack.Screen name="Doctor"
           
           component={Doctor} />
            {/* <Stack.Screen name="Accountant"
           
           component={Accountant} /> */}
        
           <Stack.Screen name="Ipd"
           
           component={Ipd} />

        </Stack.Navigator>
      </NavigationContainer> 
    )
}
export  default Navigation;