import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial/TheWalkinDead.js';
import Tela1 from './componentes/tela1/Deadcity.js';
import Tela2 from './componentes/tela2/Daryl.js';
import Tela3 from './componentes/tela3/TheOnesWhoLive.js';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Tela 1" component={Tela1} />
        <Stack.Screen name="Tela 2" component={Tela2} />
        <Stack.Screen name="Tela 3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}