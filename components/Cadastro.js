import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Linking } from 'react-native';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    setLoading(true);
    try {
      if (email !== emailDois) {
        throw new Error('Os emails não coincidem.');
      }
      if (senha !== senhaDois) {
        throw new Error('As senhas não coincidem.');
      }
      const response = await fetch('https://3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nome, usuario, senha, celular }),
      });
      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.msg);
      } else {
        throw new Error(data.msg);
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao tentar cadastrar.');
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff' }}>
      <View style={{ flex: 0.3 }}>
        <Text style={{ color:'#FA1616', fontWeight: 'bold', fontSize: 35 , padding:5}}>DATA TECH</Text>
        <Text style={{ fontSize: 30, padding:15 }}>Cadastre-se:</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Nome completo:</Text>
        <TextInput
          style={{ height: 50,width:300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Email:</Text>
        <TextInput
          style={{ height: 50,width:300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={{fontWeight: 'bold',width:300, fontSize: 15 }}>Numero de Celular:</Text>
        <TextInput
          style={{ height: 50, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={celular}
          onChangeText={text => setCelular(text)}
        />

        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Senha:</Text>
        <TextInput
          style={{ height: 50,width:300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={senha}
          secureTextEntry={true}
          onChangeText={text => setSenha(text)}
        />
       <View style={{ padding: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Button title={loading ? "Cadastrando..." : "Cadastrar"} color="#FA1616" onPress={cadastrar} disabled={loading} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button title="Cadastrar com Icloud" color="gray" onPress={() => Linking.openURL('https://www.icloud.com/mail/')} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button title="Cadastrar com Google+" color="red" onPress={() => Linking.openURL('https://www.google.com/intl/pt-BR/gmail/about/')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;
