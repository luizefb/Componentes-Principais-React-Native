import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Opacity = () => {
    const entrada = () => {
        alert('Você clicou no TouchableOpacity');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={entrada}>
                <Text style={styles.text}>
                    Aperte aqui
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        justifyContent: 'center',
        padding: 10,
        width: 200,
        marginVertical: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 24
    }
});

export default Opacity;