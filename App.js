// App.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppointmentsList from './src/screens/AppointmentsList';
import AddAppointment from './src/screens/AddAppointment';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [filterDate, setFilterDate] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('AppointmentsList');

  const addAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'AppointmentsList' ? (
        <AppointmentsList
          appointments={appointments}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          setCurrentScreen={setCurrentScreen}
        />
      ) : (
        <AddAppointment
          addAppointment={addAppointment}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
