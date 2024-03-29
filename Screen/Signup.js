import { StyleSheet, TextInput, View, ActivityIndicator, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [conPassword, setConPassword] = useState('');

  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  async function DataStore(uid) {
    const UserRef = doc(db, "users", uid, "Name", "data");
    try {
      await setDoc(UserRef, {
        fName,
        lName
      });
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing user data:", error);
      alert('Data storage failed: ' + error.message);
    }
  }

  const signUp = async () => {
    if (password === conPassword) {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const userID = response.user.uid;
        await DataStore(userID); // Pass the user ID to the DataStore function
      } catch (error) {
        console.log(error);
        alert('Sign up failed: ' + error.message);
      }
    } else {
      alert("The passwords don't match.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}> CashIQ </Text>
      <KeyboardAvoidingView behavior='padding'>
      <TextInput
      style={styles.input}
      value={fName}
      placeholder= 'First Name'
      onChangeText = {(fName) => setfName(fName)}>
      </TextInput>

      <TextInput
      style={styles.input}
      value={lName}
      placeholder= 'Last Name'
      onChangeText = {(lName) => setlName(lName)}>
      </TextInput>

      <TextInput
      style={styles.input}
      value={email}
      placeholder= 'Email'
      onChangeText = {(email) => setEmail(email)}>
      </TextInput>

      <TextInput
      style={styles.input}
      value={password}
      placeholder= 'Password'
      onChangeText = {(password) => setPassword(password)}
      secureTextEntry={true}>
      </TextInput>

      <TextInput
      style={styles.input}
      value={conPassword}
      placeholder= 'Re-Password'
      onChangeText = {(conPassword) => setConPassword(conPassword)}
      secureTextEntry={true}>
      </TextInput>

      

        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>
  );
};

export default Signup

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
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
},
button:{
  marginHorizontal: 20,
  marginVertical: 4,
  height: 50,
  borderRadius: 4,
  backgroundColor: '#fff',
  justifyContent: 'center', // Align button contents vertically
  alignItems: 'center', // Align button contents horizontally
},
buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#302D43',
},
title:{
  color: '#fff',
  fontSize: 55,
  marginBottom: 20,
  fontWeight: 'bold',
  textAlign: 'center',
}
});