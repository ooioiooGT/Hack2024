import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Singup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error){
        console.log(error);
        alert('Sign in failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  }

  return (
    <View>
      <Text>Singup</Text>
    </View>
  )
}

export default Singup

const styles = StyleSheet.create({})