import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Nav from '../components/Nav';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <Text>HOME</Text>
      <Nav />
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43'
  },

  clearBack: {
    backgroundColor: '#302D43',
    color: '#FFF',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  }


})