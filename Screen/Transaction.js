import { StyleSheet, Text, View , TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';
import DatePicker from "react-native-modern-datepicker"
import { setDoc, doc , addDoc, collection} from 'firebase/firestore';
import Nav from '../components/Nav';



const Transaction = () => {
    const userID = FIREBASE_AUTH.currentUser.uid;
    const db = FIREBASE_DB;
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Grocery', value: 'grocery'},
    {label: 'Dining', value: 'dining'},
    {label: 'Entertainment', value: 'entertainment'},
    {label: 'Bill', value: 'bill'},
    {label: 'Auto', value: 'auto'},
    {label: 'Other', value: 'other'},
]);


    const submit = async() => {
        const TransactionRef = collection(db, "users", userID, "transations");
        await addDoc(TransactionRef, {
            date: date,
            category:value,
            amount: amount,
          });
        console.log("Data stored successfully");
        console.log(userID);
        console.log(date);
        console.log(value);
        console.log(amount);
        setDate('');
        setValue('');
        setAmount('');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction</Text>
      <KeyboardAvoidingView>
        <Text style={styles.label}>Date</Text>
        <TextInput value={date} style={styles.input} placeholder='mm/dd//yyyy' onChangeText={setDate}/>
        <Text style={styles.label}>Category</Text>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a category"
        style={styles.picker}
        // dropDownContainerStyle={styles.dropDownPicker}
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput value ={amount} style={styles.input} placeholder='Amount' onChangeText={setAmount}/>
      <TouchableOpacity style={styles.Btn} onPress={submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <Nav/>
    </View>
  )
}

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43',

  },
  input:{
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    width: '80%'
  },
  Btn: {
    marginLeft: 20,
    marginHorizontal: 65,
    marginVertical: 4,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#fff',
    justifyContent: 'center', // Align button contents vertically
    alignItems: 'center', // Align button contents horizontally
  },
  label:{
    color: '#fff',
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  title:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  picker:{
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    width: '80%'
  }
})