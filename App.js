import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.verSeOAppEstaFuncionando}>
      <Text>Se o app abriu, está funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  verSeOAppEstaFuncionando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
