import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Settings } from 'react-native';
import React, {useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Login from './Screen/Login';
import Home from './Screen/Home';
import Signup from './Screen/Signup';
import Transaction from './Screen/Transaction';
import Wallet from './Screen/Wallet';
import Graphs from './Screen/Graphs';
import Profile from './Screen/Profile';


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
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="Graphs" component={Graphs} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
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