import React from 'react';
import { StyleSheet , View } from 'react-native';
import UseState_teste from './componentes/usestate';

/* Arquivo principal do projeto, é aqui que é decidido o que vai aparacer na tela */

export default function App() {
  return (
    <View style={styles.container}>
      <UseState_teste/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});