import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaXbox from "./Componentes/TelaXbox";
import TelaPlayStation from "./Componentes/TelaPlayStation";
import TelaNintendo from "./Componentes/TelaNintendo";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Xbox' component={TelaXbox}
      options={{
        tabBarIcon: ({color})=>(
          <FontAwesome5 name="xbox" size={25} color={color} />
        )
      }}
      />
      <Tabs.Screen name='Play Station' component={TelaPlayStation}
      options={{
        tabBarIcon: ({color})=>(
          <FontAwesome5 name="playstation" size={25} color={color} />
        )
      }} />
      <Tabs.Screen name="Nintendo" component={TelaNintendo}
      options={{
        tabBarIcon: ({color}) =>(
          <MaterialCommunityIcons name="nintendo-game-boy" size={25} color={color} />
        )
      }}
      />
    </Tabs.Navigator>
   </NavigationContainer>
  )
};