
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Nav from '../components/Nav';
import  { collection, getDocs } from 'firebase/firestore';
import {FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';


const Home = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);


  const fecthTransac = async () => {
    const userID = FIREBASE_AUTH.currentUser.uid;
    // Create a reference to the "transactions" subcollection for the current user
    const transactionsRef = collection(FIREBASE_DB, 'users', userID,'transations')
    const querySnapshot = await getDocs(transactionsRef)
    console.log(querySnapshot );
    const fetchedTransactions = [];
    querySnapshot.forEach((doc)=> {
        fetchedTransactions.push({ id: doc.id, ...doc.data() });
        console.log(doc.id ,'=>', doc.data())
    })
    // Fetch the documents
    // const querySnapshot = await getDocs(transactionsRef);

    // Process and log each transaction
    // transactionsRef.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data());
    // });
    setTransactions(fetchedTransactions);
  };
    

useEffect(() => {
    fecthTransac();
}, []);

const renderHeader = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Category</Text>
        <Text style={styles.headerText}>Amount</Text>
    </View>
);
  return (
    <View style={styles.container} >

      <View style={styles.welcome}>
        <Text style={styles.company}>CashIQ</Text>
        <Text style={styles.user}>Welcome {FIREBASE_AUTH.currentUser.displayName}</Text>
        <Image source={require('../assets/puppy.webp')} style={styles.img}/>
      </View>
       
      <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
      <Text>Add Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Graphs')}>
          <Text>Show Graph</Text>
      </TouchableOpacity>
      <FlatList 
        data={transactions} 
        keyExtractor={(item) => item.id}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => (
              <View style={styles.item}>
                  <Text style={styles.column}>{item.date}</Text>
                  <Text style={styles.column}>{item.category}</Text>
                  <Text style={styles.column}>{item.amount}</Text>
              </View>
          )}
      />

      <Nav />
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#302D43',
  },
  welcome:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  user:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  company:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  header: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f4f4f4',
  },
  headerText: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 16,
  },
  item: {
      flexDirection: 'row',
      padding: 10,
      // borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
  column: {
      flex: 1,
      fontSize: 16,
  },

  clearBack: {
    backgroundColor: '#302D43',
    color: '#FFF',
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  },

  img:{
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#8930E8'
  }

})