import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import Nav from '../components/Nav';


const Wallet = () => {
  return (
    <View style={styles.container}>
        <Text>WALLET</Text>
        <Nav/>
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43'
  },
})