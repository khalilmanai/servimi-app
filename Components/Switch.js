import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { changeStatus, getStatusforSwitch } from "../api/axios";

const options = [
  { label: "Libre", value: "libre" },
  { label: "Occupé", value: "occupé" },
];

const Switch = ({ tableID }) => {
  const [statusData, setStatusData] = useState(null);
  const [initialValue, setInitialValue] = useState(1); // State to hold the initial value for the switch
console.log(initialValue)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStatusforSwitch(tableID);
        setStatusData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (statusData) {
      console.log(statusData.status)
      // Update the initial value based on the fetched status
      setInitialValue(statusData.status === "occupé" ? 1 : 0);
    }
  }, [statusData]);

  if (statusData === null) {
    return null; // Return loading indicator or other UI while data is being fetched
  }

  const updateStatus = async (value) => {
    try {
      const response = await changeStatus(tableID, value);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update status: ${error.message}`);
    }
  };

  return (
    <View>
      <SwitchSelector
        options={options}
        initial={initialValue} // Set the initial value based on the fetched status
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
