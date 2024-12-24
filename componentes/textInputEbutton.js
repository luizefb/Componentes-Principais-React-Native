import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const TextInputExemplo = () => {
    const [text, setText] = useState('')

    const entrada = () => {
        alert('Você digitou: ' + text);
    };
    
    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:12 }}
                onChangeText={text => setText(text)}
                value={text}
                placeholder="Digite aqui"
            />
            <Button style={styles.button}
                onPress={entrada}
                color="#841584"
                title="Enviar"
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:24,
    justifyContent: 'center'
  },
});

export default TextInputExemplo;