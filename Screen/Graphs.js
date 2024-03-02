import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import Nav from '../components/Nav';


const Graphs = () => {
  return (
    <View style={styles.container}>
        <Text>GRAPHS</Text>
        <Nav />
    </View>
  )
}

export default Graphs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43'
  },
  

})