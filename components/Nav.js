// Nav.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faWallet, faChartSimple, faUser, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <FontAwesomeIcon style={styles.Btn} icon={faHouse} size={25} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Transaction')} >
        <FontAwesomeIcon style={styles.Btn} icon={faMoneyCheckDollar} size={25} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Graphs')} >
        <FontAwesomeIcon style={styles.Btn} icon={faChartSimple} size={25} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
        <FontAwesomeIcon style={styles.Btn} icon={faUser} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
        color: '#FFF',
        fontWeight: 'bold',
        paddingBottom: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      }
});

export default Nav;
