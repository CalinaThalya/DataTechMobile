import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Comparacoes = () => {
  const [expandedLoja1, setExpandedLoja1] = useState(false);
  const [expandedLoja2, setExpandedLoja2] = useState(false);

  const toggleExpandLoja1 = () => {
    setExpandedLoja1(!expandedLoja1);
    if (expandedLoja2) setExpandedLoja2(false);
  };

  const toggleExpandLoja2 = () => {
    setExpandedLoja2(!expandedLoja2);
    if (expandedLoja1) setExpandedLoja1(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor:'#ffff' }}>
      <View style={{ flex: 0 }}>
      </View>
      <View style={{ flex: 0.4, justifyContent: 'center' }}>
        <Text style={{ color: '#FA1616', fontWeight: 'bold', fontSize: 35, padding: 5 }}>DATA TECH</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Compare as melhores empresas:</Text>
        <View style={{ width: '80%', backgroundColor: '', padding: 10 }}>
          <TouchableOpacity onPress={toggleExpandLoja1}>
            <View style={{ marginBottom: 10, backgroundColor: '#F0F0F0', height: 50 }}>
              <Text style={{ color: 'gray' }}>Loja 1:</Text>
            </View>
          </TouchableOpacity>
          {expandedLoja1 && (
            <View style={{ marginBottom: 10, backgroundColor: '#F0F0F0', height: 50 }}>
              <Text style={{ color: 'gray' }}>Detalhes da Loja 1</Text>
            </View>
          )}
          <TouchableOpacity onPress={toggleExpandLoja2}>
            <View style={{ marginBottom: 10, backgroundColor: '#F0F0F0', height: 50 }}>
              <Text style={{ color: 'gray' }}>Loja 2:</Text>
            </View>
          </TouchableOpacity>
          {expandedLoja2 && (
            <View style={{ marginBottom: 10, backgroundColor: '#F0F0F0', height: 50 }}>
              <Text style={{ color: 'gray' }}>Detalhes da Loja 2</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Comparacoes;
