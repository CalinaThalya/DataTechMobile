import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EsqueceuSenha = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarToken = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://3000/enviar-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.msg);
      } else {
        throw new Error(data.msg);
      }
    } catch (error) {
      console.error('Erro ao enviar token:', error);
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao tentar enviar o token.');
    }
    setLoading(false);
  };

  const redefinirSenha = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://3000/redefinir-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token, novaSenha, confirmarSenha }),
      });
      const data = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', data.msg);
      } else {
        throw new Error(data.msg);
      }
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      Alert.alert('Erro', error.message || 'Ocorreu um erro ao tentar redefinir a senha.');
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff' }}>
      <Text style={{ fontSize: 35, marginBottom: 20 }}>Esqueceu sua senha?</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Digite seu email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ height: 60, width: 300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 20, backgroundColor: '#F0F0F0' }}      
      />
      <Button
        title={loading ? "Enviando..." : "Enviar Token"}
        color="#FA1616"
        onPress={enviarToken}
        disabled={loading}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>Digite o token recebido:</Text>
      <TextInput
        value={token}
        onChangeText={text => setToken(text)}
        style={{ height: 60, width: 300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 20, backgroundColor: '#F0F0F0' }}      
      />
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Digite sua nova senha:</Text>
      <TextInput
        value={novaSenha}
        onChangeText={text => setNovaSenha(text)}
        style={{ height: 60, width: 300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 20, backgroundColor: '#F0F0F0' }}      
      />
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Confirme sua nova senha:</Text>
      <TextInput
        value={confirmarSenha}
        onChangeText={text => setConfirmarSenha(text)}
        style={{ height: 60, width: 300, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 20, backgroundColor: '#F0F0F0' }}      
      />
      <Button
        title={loading ? "Redefinindo..." : "Redefinir Senha"}
        color="#FA1616"
        onPress={redefinirSenha}
        disabled={loading}
      />
    </View>
  );
};

export default EsqueceuSenha;
