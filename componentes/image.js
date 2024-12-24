import React from "react";
import { Text, StyleSheet, Image, ImageBackground, View } from 'react-native';

const Imagem = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/purple.jpg')}
                style={styles.background}
                resizeMode="cover"
            >
                <Text style={styles.text}>Exemplo de imagem</Text>
            </ImageBackground>
            
            <Image 
            source={require('../assets/gastly.png')} 
            style={styles.image} 
            resizeMode="contain"
            blurRadius={0.8}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject, 
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 65
  },
  image: {
    width: 250,
    height: 250,
    zIndex: 2,
    marginBottom: 128
  },
});

export default Imagem;