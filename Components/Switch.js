import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { changeStatus } from '../api/axios';

const options = [
  { label: 'Libre', value: 'libre' },
  { label: 'Occupé', value: 'occupé' }
];

const Switch= (props) => {
  const [status, setStatus] = useState('occupé');

  const handleChange = value => {
    setStatus(value);
  };

  const tableID = props.tableID

  const updateStatus = async ()=>{
    try {
    const response = await  changeStatus(tableID , status)

    }catch(error){
        console.error(error)
    }
  }

  return (
    <View >
    
      <SwitchSelector
        options={options}
        initial={1}
        onPress={handleChange}
        textColor="#FB8703" //'#7a44cf'
        selectedColor="white"
        buttonColor="#FB8703"
        borderColor="#FB8703"
        hasPadding
      />
    </View>
  );
};

export default Switch;
