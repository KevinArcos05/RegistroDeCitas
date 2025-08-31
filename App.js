import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, View } from 'react-native';
import Formulario from './src/components/Formulario.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>App de Citas Médicas</Text>
        <Text style={styles.subtitle}>🐾 Veterinaria</Text>
      </View>

      {/* Botón Nueva Cita */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={({ pressed }) => [
          styles.btnNC,
          pressed && { transform: [{ scale: 0.96 }] }, 
        ]}
      >
        <Text style={styles.btntextNC}>+ Nueva Cita</Text>
      </Pressable>

      {/* Modal */}
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', 
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: '#1f2937', 
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#3b82f6', 
    fontWeight: '600',
    marginTop: 4,
  },
  btnNC: {
    backgroundColor: '#10b981', 
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5, 
  },
  btntextNC: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
