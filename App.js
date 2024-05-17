import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native'; 
import Cadastro from './components/Cadastro';
import Comparacoes from './components/Comparacoes'; 
import Login from './components/Login'; 
import EsqueceuSenha from './components/EsqueceuSenha'; 
import Home from './components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: null,
            headerRight: () => (
              <ImageBackground
                source={require('./iconDataTech.png')}
                style={{ height: 45, width: 46, marginRight: 20 }}
              />
            ),
          }}
          />
          <Stack.Screen
          name="Home" 
          component={Home}
          options={{ title: 'Home' }} 
          />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro} 
          options={{ title: 'Cadastro' }} 
        />
        <Stack.Screen
          name="Comparacoes"
          component={Comparacoes}
          options={{
            headerTitle: null,
          }}
        />
        <Stack.Screen
          name="EsqueceuSenha" 
          component={EsqueceuSenha}
          options={{ title: 'Esqueceu sua senha' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
