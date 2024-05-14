import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native'; 
import Cadastro from './components/Cadastro';
import Comparacoes from './components/Comparacoes'; 
import Login from './components/Login'; 
import EsqueceuSenha from './components/EsqueceuSenha'; // Importe a tela EsqueceuSenha

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
          name="EsqueceuSenha" // Defina o nome da tela
          component={EsqueceuSenha} // Especifica o componente a ser renderizado
          options={{ title: 'Esqueceu sua senha' }} // Opções de navegação
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
