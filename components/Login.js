import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Linking, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const fazerLogin = async () => {
    try {
      const response = await fetch('https://3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('Home'); 
      } else {
        Alert.alert('Erro', data.message); 
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante o login.');
    }
  };

  const irParaCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const irParaEsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff' }}>
      <View style={{ flex: 0.5}}>
        <Text style={{ color:'#FA1616', fontWeight: 'bold', fontSize: 40, padding:20}}>DATA TECH</Text>
        <Text style={{ fontSize: 35 }}>Seja Bem Vindo!</Text>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 15 }}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ height: 50,width:300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}      
      />
      <Text style={{fontWeight: 'bold', fontSize: 15 }}>Senha:</Text>
      <TextInput
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry={true}
        style={{ height: 50, width:300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}      
      />
      <TouchableOpacity onPress={irParaEsqueceuSenha}>
        <Text style={{fontWeight: 'bold', fontSize: 12, color:"gray",alignSelf: 'flex-end', marginBottom: 50}}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <Button
        title="Entrar"
        color="#FA1616" 
        height={400} 
        onPress={fazerLogin}
      />
      <TouchableOpacity onPress={irParaCadastro}>
        <Text style={{fontWeight: 'bold', fontSize: 11, color:"gray",alignSelf: 'center', padding:7}}>Não tem uma conta? Registre agora.</Text>
      </TouchableOpacity>
      <View style={{ padding:20, width:260 ,alignSelf: 'center' }}>
        <Button title="Entrar com Icloud" color="gray" onPress={() => Linking.openURL('https://www.icloud.com/mail/')} />
      </View>
      <View style={{width:220,alignSelf: 'center' }}>
        <Button title="Entrar com Google+" color="red" onPress={() => Linking.openURL('https://www.google.com/intl/pt-BR/gmail/about/')} />
      </View>
    </View>
  );
};

export default Login;
