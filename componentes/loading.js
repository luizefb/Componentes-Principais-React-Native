import React from "react";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";

const Loading = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Carregando...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize:18,
        fontWeight: 'bold',
        padding: 20,
    },
});

export default Loading;