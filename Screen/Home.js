import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faWallet, faChartSimple, faUser} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style = {styles.nav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.Btn}>
            <FontAwesomeIcon style={styles.Btn} icon={faHouse} size={25}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}style={styles.Btn}>
            <FontAwesomeIcon  style={styles.Btn} icon={faWallet} size={25} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Graphs')}style={styles.Btn}>
            <FontAwesomeIcon  style={styles.Btn} icon={faChartSimple} size={25} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}style={styles.Btn}>
            <FontAwesomeIcon  style={styles.Btn} icon={faUser} size={25} />
          </TouchableOpacity>

      </View>
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
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#8930E8',
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  Btn:{
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  }


})