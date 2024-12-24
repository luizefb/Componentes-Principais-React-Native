import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Texto from '../componentes/textEx';
import TextInputExemplo from '../componentes/textInputEbutton';
import Imagem from '../componentes/image';
import Loading from '../componentes/loading';
import SwitchTeste from '../componentes/switch';
import ModalTeste from '../componentes/modal';
import UseState_teste from '../componentes/usestate';
import Scroll from '../componentes/scroll';
import Opacity from '../componentes/opacity';
import Highlight from '../componentes/highlight';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Texto')}
                >
                    <Text style={styles.buttonText}>Componente Text</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('TextInput e Button')}
                >
                    <Text style={styles.buttonText}>Componente TextInput e Button</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Image')}
                >
                    <Text style={styles.buttonText}>Componente Image</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Loading')}
                >
                    <Text style={styles.buttonText}>Componente Loading</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Switch')}
                >
                    <Text style={styles.buttonText}>Componente Switch</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Modal')}
                >
                    <Text style={styles.buttonText}>Componente Modal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('UseState')}
                >
                    <Text style={styles.buttonText}>Componente UseState</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ScrollView')}
                >
                    <Text style={styles.buttonText}>Componente ScrollView</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Touchable Opacity')}
                >
                    <Text style={styles.buttonText}>Componente TouchableOpacity</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Touchable Highlight')}
                >
                    <Text style={styles.buttonText}>Componente TouchableHighlight</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela Principal" component={HomeScreen} 
                    options={{
                        title: ' Componentes React Native ',
                        headerTitleStyle: { color: '#333333', fontWeight: 'bold', fontSize: 24 },
                        headerTitleAlign: 'center',
                    }}  
                />
                <Stack.Screen name="Texto" component={Texto} />
                <Stack.Screen name="TextInput e Button" component={TextInputExemplo} />
                <Stack.Screen name="Image" component={Imagem} />
                <Stack.Screen name="Loading" component={Loading} />
                <Stack.Screen name="Switch" component={SwitchTeste} />
                <Stack.Screen name="Modal" component={ModalTeste} />
                <Stack.Screen name="UseState" component={UseState_teste} />
                <Stack.Screen name="ScrollView" component={Scroll} />
                <Stack.Screen name="Touchable Opacity" component={Opacity} />
                <Stack.Screen name="Touchable Highlight" component={Highlight} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20, // posso remover futuramente
        padding: 10,
    },
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        borderColor: '#333333',
        width: 350,
        height: 64,
        marginVertical: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6,
        elevation: 6, 
    },
    buttonText: {
        color: '#333333',
        fontSize: 20,   
    },
});

export default Main;
