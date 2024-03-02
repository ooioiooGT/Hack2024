import { StyleSheet, TextInput, View, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../Firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Singup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error){
        console.log(error);
        alert('Sign up failed: ' + error.message);
    } finally {
        setLoading(false);
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