import React, { useState } from 'react';
import { View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { changeStatus } from '../api/axios';

const options = [
  { label: 'Libre', value: 'libre' },
  { label: 'Occupé', value: 'occupé' }
];

const Switch = ({ tableID }) => {
  const [status, setStatus] = useState('libre');

  const updateStatus = async (value) => {
    try {
      const response = await changeStatus(tableID, value);
      setStatus(value);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update status: ${error.message}`);
    }
  };

  return (
    <View>
      <SwitchSelector
        options={options}
        initial={status === 'occupé' ? 1 : 0}
        onPress={updateStatus}
        textColor="orange"
        selectedColor="white"
        buttonColor="orange"
        borderColor="orange"
        hasPadding
      />
    </View>
  );
};

export default Switch;
