import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../Firebase';
import Singup from './Singup';

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [udi, setUdi] = useState('');

  const login = async() => {
    setLoading(true);
    try{
      await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert('Success!')
    }catch(error){
      console.log(error);
  } 
  finally{
    setLoading(false);
   }
  }
  return (
    <View>
      <TextInput placeholder='email'  onChangeText={(text) => setEmail(text)}/>
      <TextInput placeholder='password' onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
      <TouchableOpacity>
        <Text onPress={login}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
        <Text>Singup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

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