import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.Btn}>
          <Text style={styles.Btn}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}style={styles.Btn}>
          <Text style={styles.Btn}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Graphs')}style={styles.Btn}>
          <Text style={styles.Btn}>Graphs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}style={styles.Btn}>
          <Text style={styles.Btn}>Settings</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302D43',
    color: '#FFF',
  },

  clearBack: {
    backgroundColor: '#302D43',
    color: '#FFF',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  Btn: {
    width: 80,
    textAlign: 'center',
    backgroundColor: '#3d3d4e',
    borderColor: 'black',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    color: '#fff'
  },

})