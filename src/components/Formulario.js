import {
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";

export default function Formulario({ modalVisible, setModalVisible }) {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Título */}
          <Text style={styles.titulo}>
            Nueva <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          {/* Campos */}
          <View style={styles.field}>
            <Text style={styles.label}>🐾 Nombre Paciente</Text>
            <TextInput style={styles.input} placeholder="Ej: Firulais" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>👤 Nombre Propietario</Text>
            <TextInput style={styles.input} placeholder="Ej: Kevin Arcos" />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>📧 Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="ejemplo@email.com"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>📱 Celular</Text>
            <TextInput
              style={styles.input}
              placeholder="0991234567"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>📝 Síntomas</Text>
            <TextInput
              style={[styles.input, styles.inputArea]}
              placeholder="Describa los síntomas..."
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Botón único */}
          <Pressable
            style={[styles.btn, styles.btnCerrar]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.btnText}>Cerrar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titulo: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 20,
  },
  tituloBold: {
    color: "#3b82f6",
    fontWeight: "900",
  },
  field: {
    marginBottom: 20,
  },
  label: {
    color: "#374151",
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    fontSize: 16,
    color: "#111827",
  },
  inputArea: {
    height: 100,
    textAlignVertical: "top",
  },
  btn: {
    paddingVertical: 14,
    marginTop: 30,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#ef4444",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
