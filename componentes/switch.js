import React, {useState} from 'react';
import {  StyleSheet, View, Switch, Text } from 'react-native';

const SwitchTeste = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.switch}>
      <Text style={styles.text}>Teste o Switch</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    switch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    },
});

export default SwitchTeste;