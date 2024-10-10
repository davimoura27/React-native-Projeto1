import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HelloWorld from './src/screens/HelloWorld'
import Alunos from './src/screens/Alunos'

import AlunoDetalhes from './src/screens/AlunoDetalhe';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HelloWorld}/>
        <Stack.Screen name='Alunos' component={Alunos}/>
        <Stack.Screen name='AlunoDetalhes' component={AlunoDetalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

