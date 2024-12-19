import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const UseState_teste = () => {
  const [text, setText] = useState('Hello, World!');

  function handleClick() {
    setText('você cliclou no botão e atualizou a variavel');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button title="Atualize" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});


export default UseState_teste;