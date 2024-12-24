import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Texto = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text
                    style={styles.text}
                    numberOfLines={2}
                    onPress={() => alert('Exemplo de alerta dentro de um componente de texto.')}
                >
                    Exemplo de texto. Clique aqui
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
    },
});

export default Texto;
