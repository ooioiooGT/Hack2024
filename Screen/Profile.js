import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import Nav from '../components/Nav';


const Options = () => {
  return (
    <View style={styles.container}>
        <Text>PROFILE</Text>
        <Nav/>
    </View>
  )
}

export default Options

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43'
  },
})