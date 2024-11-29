// src/screens/AppointmentsList.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import CustomDateTimePicker from '../components/DateTimePicker';

const AppointmentsList = ({ appointments, filterDate, setFilterDate, setCurrentScreen }) => {
  const filteredAppointments = filterDate
    ? appointments.filter(
        (appt) =>
          new Date(appt.date).toDateString() === filterDate.toDateString()
      )
    : appointments;

  return (
    <View style={styles.container}>
      <Button title="Adicionar Agendamento" onPress={() => setCurrentScreen('AddAppointment')} />

      <Text style={styles.label}>Filtrar por data:</Text>
      <CustomDateTimePicker mode="date" value={filterDate} onChange={setFilterDate} />

      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.appointmentItem}>
            <Text>Data: {new Date(item.date).toLocaleDateString()}</Text>
            <Text>Hora: {new Date(item.time).toLocaleTimeString()}</Text>
            <Text>Endereço: {item.address}</Text>
          </View>
        )}
      />
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
  appointmentItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AppointmentsList;
