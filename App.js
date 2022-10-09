import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaXbox from "./Componentes/TelaXbox";
import TelaPlayStation from "./Componentes/TelaPlayStation";
import TelaNintendo from "./Componentes/TelaNintendo";

const Tabs = createBottomTabNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name='Xbox' component={TelaXbox}/>
      <Tabs.Screen name='Play Station' component={TelaPlayStation} />
      <Tabs.Screen name="Nintendo" component={TelaNintendo}/>
    </Tabs.Navigator>
   </NavigationContainer>
  )
};