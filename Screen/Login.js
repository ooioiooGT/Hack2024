import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Singup from './Signup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../Firebase';
import { LinearGradient } from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();

  const login = async() => {
    try{
      await signInWithEmailAndPassword(Auth, email, password);
    }catch(error){
      console.log(error);
  };
  }
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>CashIQ</Text>
      <TextInput style={styles.input} placeholder='email' />
      <TextInput style={styles.input} placeholder='password' secureTextEntry={true}/>

      <TouchableOpacity>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Text onPress={login} style={styles.loginBtn}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
        <Text>Sign-Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  h1:{
    color: '#fff',
    fontSize: 30
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
    // justifyContent: 'center',
    backgroundColor: '#302D43',
  },

  loginBtn: {
    width: '80%',
    backgroundColor: '#5F5F5F',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  }
})