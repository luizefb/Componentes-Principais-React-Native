import React from "react";
import { Text, StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

const Scroll = () => {
    return (
        <View style={styles.container} edges={['top']}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: 'gray',
        paddingTop: 10,
    },
    text: {
        fontSize: 42,
        padding: 12,
    },
});

export default Scroll;