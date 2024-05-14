import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const EsqueceuSenha = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/esqueceu-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      Alert.alert('Sucesso', data.msg);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar enviar o email.');
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 35, marginBottom: 20 }}>Esqueceu sua senha?</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Digite seu email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ height: 50, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 20, backgroundColor: '#F0F0F0' }}      
      />
      <Button
        title={loading ? "Enviando..." : "Enviar"}
        color="#FA1616"
        onPress={enviarEmail}
        disabled={loading}
      />
    </View>
  );
};

export default EsqueceuSenha;
