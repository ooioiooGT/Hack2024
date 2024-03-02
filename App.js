import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, {useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Login from './Screen/Login';
import Home from './Screen/Home';
import Signup from './Screen/Signup';
import Transaction from './Screen/Transaction';



export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);
  const auth = getAuth();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      setUser(user);
    });
    return () => unsubscribe();
   }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
      {user ? (
          // User is logged in
          <Stack.Screen name ="Transaction" component={Transaction} />
        ) : (
          // No user is logged in
          <>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
          </>
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}