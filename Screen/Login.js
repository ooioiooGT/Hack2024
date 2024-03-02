import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../Firebase';
import { LinearGradient } from 'react-native-linear-gradient';
import Signup from './Signup';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async() => {
    try{
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert('Success!')
    }catch(error){
      console.log(error);
  } 
  }
  return (

    <View style={styles.container}>
      <Text style={styles.h1}>CashIQ</Text>
      <TextInput value={email} style={[styles.input, styles.bottom]} placeholder='email' onChangeText={(email)=>setEmail(email)} />
      <TextInput value={password} style={styles.input} placeholder='password' secureTextEntry={true} onChangeText={(password)=>setPassword(password)}/>

      <TouchableOpacity>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
          <Text onPress={login} style={styles.Btn}>Login</Text>
        {/* </LinearGradient> */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
        style={styles.signUpButton}>
        <Text style={styles.Btn}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  h1:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 40,
  }, 

  input:{
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    width: '80%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#302D43',
  },

  Btn: {
    width: 80,
    textAlign: 'center',
    backgroundColor: '#3d3d4e',
    borderColor: 'black',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#fff'
  },

  bottom:{
    marginBottom: 30,
  }
})
