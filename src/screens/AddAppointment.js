// src/screens/AddAppointment.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import CustomDateTimePicker from '../components/DateTimePicker';

const AddAppointment = ({ addAppointment, setCurrentScreen }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [address, setAddress] = useState('');

  const handleAddAppointment = () => {
    if (!address) {
      Alert.alert('Erro', 'Por favor, preencha o endereço.');
      return;
    }

    const newAppointment = {
      id: Date.now(),
      date,
      time,
      address,
    };

    addAppointment(newAppointment);
    setCurrentScreen('AppointmentsList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Data:</Text>
      <CustomDateTimePicker mode="date" value={date} onChange={setDate} />

      <Text style={styles.label}>Hora:</Text>
      <CustomDateTimePicker mode="time" value={time} onChange={setTime} />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o endereço"
        value={address}
        onChangeText={setAddress}
      />

      <Button title="Salvar Agendamento" onPress={handleAddAppointment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default AddAppointment;
