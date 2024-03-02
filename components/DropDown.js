import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text , StyleSheet} from 'react-native';

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const placeholder = {
      label: 'Select an option...',
      value: null,
    };
    const options = [
      { label: 'Groceries', value: 'option1' },
      { label: 'Dining', value: 'option2' },
      { label: 'Entertainment', value: 'option3' },
      { label: 'Auto', value: 'option4' },
      { label: 'Bills', value: 'option5' },
      { label: 'Other', value: 'option6' },
    ];
    return (
      <View styles={styles.container}>
        <Text style={styles.label}>Select an option:</Text>
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={(value) => setSelectedValue(value)}
          value={selectedValue}
          style={styles.options}
        />
        {/* {selectedValue && <Text>Selected: {selectedValue}</Text>} */}
      </View>
    );
  };
  export default Dropdown;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#302D43',
    },

    label: {
      color: '#fff',
      marginBottom: 20,
      fontSize: 25,
      fontWeight: 'bold',
    },

    options: {
      inputIOS: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#3816E9',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3816E9',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

      },
      inputAndroid: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3816E9',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3816E9',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      
    },
  })