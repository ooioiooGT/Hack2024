import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dropdown = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState(null);
    const placeholder = {
      label: 'Select an option...',
      value: null,
    };
    const options = [
      { label: 'Groceries', value: 'groceries' },
      { label: 'Dining', value: 'dining' },
      { label: 'Entertainment', value: 'entertainment' },
      { label: 'Auto', value: 'auto' },
      { label: 'Bills', value: 'bills' },
      { label: 'Other', value: 'other' },
    ];

    // const navigateToGraphs = (value) => {
    //   navigation.navigate('Graphs', { selectedValue: value });
    // };

    return (
      <View styles={styles.container}>
        <Text style={styles.label}>Select an option:</Text>
        <RNPickerSelect
          placeholder={placeholder}
          items={options}
          onValueChange={(value) => {
            setSelectedValue(value);
            // navigateToGraphs(value);
          }}
          value={selectedValue}
          style={styles.options}
        />
        {/*navigation.navigate('Graphs', {setSelectedValue(value) }) */}
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