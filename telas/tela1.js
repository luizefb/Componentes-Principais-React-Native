import React from 'react';
import { StyleSheet , View } from 'react-native';
import UseState_teste from '../componentes/usestate';
import Basico from '../componentes/componentesBasicos';
import Texto from '../componentes/textEx';
import TextInputExemplo from '../componentes/textInputEbutton';
import Imagem from '../componentes/image';
import SwitchTeste from '../componentes/switch';
import Loading from '../componentes/loading';
import ModalTeste from '../componentes/modal';
import { StatusBar } from 'expo-status-bar';

/* Arquivo principal do projeto, é aqui que é decidido o que vai aparacer na tela */

const Tela1 = () => {
  return (
    //Exemplo de UseState
    /* 
    <View style={styles.container}>
      <UseState_teste/>
    </View>
    */

    //Exemplo de componentes básicos
    /*
    <View style={styles.container}>
        <Basico/>
    </View>
    */

    //Exemplo de texto
    /*
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      <Texto/>
    </View>
    */

    //Exemplo de TextInput
    /*
    <View style={styles.container}>
        <TextInputExemplo />
    </View>
    */

    //Exemplo de uso de imagem
    /*
    <View style={styles.container}>
        <Imagem/>
    </View>
    */

    //Exemplo de Switch
    /*
    <View style={styles.container}>
        <SwitchTeste/>
    </View>
    */

    /*
    //Exemplo de tela de carregamento
    <View style={styles.container}>
        <Loading/>
    </View>
    */

    //Exemplo de modal
    <View style={styles.container}>
        <ModalTeste/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tela1;