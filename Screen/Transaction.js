import { StyleSheet, Text, View , TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';
import DatePicker from "react-native-modern-datepicker"
import { setDoc, doc , addDoc, collection} from 'firebase/firestore';



const Transaction = () => {
    const userID = FIREBASE_AUTH.currentUser.uid;
    const db = FIREBASE_DB;
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
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
    }
  return (
    <View>
      <Text>Transaction</Text>
      <KeyboardAvoidingView>
        <Text>Date</Text>
        <TextInput value={date} placeholder='mm/dd//yyyy' onChangeText={setDate}/>
        <Text>Category</Text>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a category"
        // style={styles.picker}
        // dropDownContainerStyle={styles.dropDownPicker}
      />
      <Text>Amount</Text>
      <TextInput value ={amount} placeholder='Amount' onChangeText={setAmount}/>
      <TouchableOpacity onPress={submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Transaction;