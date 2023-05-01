/*
  Gamder: tinder but for fingding new games to play
  Developers: Hunter Hockman and David Waldron
  Last updated: 5/2/2023
  File Description: This is the App.js file it handles the navigation to the other app screens 
*/
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}