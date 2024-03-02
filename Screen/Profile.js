import { StyleSheet, View, Text, Image, TextInput, Button} from 'react-native'
import React, {useState} from 'react'
import { BlurView } from '@react-native-community/blur';
import Nav from '../components/Nav';
import { FIREBASE_AUTH } from '../Firebase';
import { signOut } from 'firebase/auth';


const Options = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('Johnny@gmail.com');
  const [password, resetPassword] = useState('***********');

  
  // Function to sign out the user
  const handleSignOut = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      console.log('User signed out successfully');
      // Here you can navigate the user back to the login screen or perform other actions
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/puppy.webp')} style={styles.img}/>
        <View>
          <TextInput editable={false} style={styles.input} placeholder='First Name' value={firstName} onChangeText={(text)=>setFirstName(text)}/>
          <TextInput editable={false} style={styles.input} placeholder='Last Name' value={lastName} onChangeText={(text)=>setLastName(text)}/>
          <TextInput editable={false} style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)}/>
          <TextInput editable={false} style={styles.input} placeholder='Password' value={password} onChangeText={(text)=>resetPassword(text)}/>
          </View>

          <View style={styles.org}>
            <Button color='#FD8450' title='Update'/>
            <Button color='#FD8450' title='Logout' onPress={handleSignOut}/>
        </View>
        <Nav/>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43',
    justifyContent: 'center',
    paddingHorizontal: 20, 

  },
  color:{
    color: '#FFF',
  },
  input:{
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    top: -30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
img:{
  width: 200, 
  height: 200, 
  borderRadius: 100, 
  alignItems: 'center', 
  alignSelf: 'center', 
  top:-70,
  borderWidth: 3,
  borderColor: '#8930E8'
},

org:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#FFF',
}
})