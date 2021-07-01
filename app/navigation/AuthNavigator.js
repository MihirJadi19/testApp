import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { create } from "jimp";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();
const AuthNavigator =() =>(
    <Stack.Navigator>
        <Stack.Screen name = "welcome" component={WelcomeScreen} />
        <Stack.Screen name = "welcome" component={LoginScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;