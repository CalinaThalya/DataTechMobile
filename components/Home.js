import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATA TECH</Text>
      <Text style={styles.subtitle}>Menu</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <ImageBackground
            source={require('./assets/1281063.png')}
            style={styles.imageBackground}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comparacoes')}>
          <ImageBackground
            source={require('./assets/7247088.png')}
            style={styles.imageBackground}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
          <ImageBackground
            source={require('./assets/Untitled-8-256.webp')}
            style={styles.imageBackground}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SobreNos')}>
          <ImageBackground
            source={require('./assets/79-users-256.webp')}
            style={styles.imageBackground}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text style={styles.button}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  imageBackground: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius:100
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  button: {
    alignSelf: 'end',
    backgroundColor: '#FFFF',
    fontWeight: 'bold',
    height: 30,
    width: 40,
    flex: 4,
    borderRadius: 100,
  },
});

export default Home;
