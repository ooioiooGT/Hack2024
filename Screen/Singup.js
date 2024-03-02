import { StyleSheet, TextInput, View, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { addDoc } from 'firebase/firestore';

const Singup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [conPassword, setConPassword] = useState('');

  const auth = FIREBASE_AUTH;
  const signUp = async () => {
    if ( password == conPassword){
    try {

        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user.uid;
        addDoc(FIREBASE_DB, user, "information"),{
          firstname: fName,
          lastname: lName,
        };
    } catch (error){
        console.log(error);
        alert('Sign up failed: ' + error.message);
    } 
  }else{
    alert("The password doesn't match")
    return
  }
  }
  return (
    <View style={styles.container}>
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
      onChangeText = {(password) => setPassword(password)}>
      </TextInput>

      <TextInput
      style={styles.input}
      value={conPassword}
      placeholder= 'Password'
      onChangeText = {(conPassword) => setConPassword(conPassword)}>
      </TextInput>

      {loading ? (<ActivityIndicator size='large' color='#0000ff' /> 
      ): (
      <>
        <Button title='Create account' onPress={signUp}/>  
      </>
      )}
     </KeyboardAvoidingView>
    </View>
  );
};

export default Singup

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
},
input:{
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
},
});