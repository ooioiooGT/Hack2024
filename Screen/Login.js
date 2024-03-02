import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Signup from './Signup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../Firebase';

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
    <View>
      <TextInput placeholder='email' />
      <TextInput placeholder='password' secureTextEntry={true}/>
      <TouchableOpacity>
        <Text onPress={login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})