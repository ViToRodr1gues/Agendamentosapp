// src/components/DateTimePicker.js

import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDateTimePicker = ({ mode, value, onChange }) => {
  const [visible, setVisible] = useState(false);

  const handleConfirm = (event, selectedValue) => {
    setVisible(false);
    if (selectedValue) {
      onChange(selectedValue);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={`Selecionar ${mode === 'date' ? 'Data' : 'Hora'}`}
        onPress={() => setVisible(true)}
      />
      {visible && (
        <DateTimePicker
          value={value || new Date()}
          mode={mode}
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleConfirm}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default CustomDateTimePicker;
