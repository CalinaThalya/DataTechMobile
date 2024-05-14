import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { Linking } from 'react-native';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [emailDois, setEmailDois] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaDois, setSenhaDois] = useState('');
  const [usuario, setUsuario] = useState('');
  const [celular, setCelular] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.3 }}>
        <Text style={{ color:'#FA1616', fontWeight: 'bold', fontSize: 35 , padding:5}}>DATA TECH</Text>
        <Text style={{ fontSize: 30, padding:15 }}>Cadastre-se:</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left'}}>
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Nome completo:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Nome de usuario:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={usuario}
          onChangeText={text => setUsuario(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Email:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Repita seu Email:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={emailDois}
          onChangeText={text => setEmailDois(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Numero de Celular:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={celular}
          onChangeText={text => setCelular(text)}
        />

        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Senha:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={senha}
          onChangeText={text => setSenha(text)}
        />
        <Text style={{fontWeight: 'bold', fontSize: 15 }}>Repita sua Senha:</Text>
        <TextInput
          style={{ height: 40, borderColor: '#FA1616', borderRadius: 15, borderWidth: 1, marginBottom: 10, backgroundColor: '#F0F0F0' }}
          value={senhaDois}
          onChangeText={text => setSenhaDois(text)}
        />
       <View style={{ padding: 20 }}>
  <View style={{ marginBottom: 10 }}>
    <Button title="Cadastrar" color="#FA1616" />
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
