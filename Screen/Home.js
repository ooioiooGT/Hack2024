
import { StyleSheet, View, Text, TouchableOpacity, FlatList ,Image} from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native';
import Nav from '../components/Nav';
import  { collection, getDocs } from 'firebase/firestore';
import {FIREBASE_AUTH, FIREBASE_DB } from '../Firebase';
import { useFocusEffect } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


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
    console.log(fecthTransac);
  };
    

  useFocusEffect(
    useCallback(() => {
        fecthTransac();
    }, [])
  );

useEffect(() => {
    // Calculate the total amount whenever transactions change
    const total = transactions.reduce((sum, transaction) => sum + Number(transaction.amount || 0), 0);
    setTotalAmount(total);
  }, [transactions]);

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
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/puppy.webp')} style={styles.img}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.data}>
        <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
        <Text style={styles.title}>Add Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Graphs')}>
            <Text style={styles.title} >Show Graph</Text>
        </TouchableOpacity>

        <View style={styles.list}>
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
        </View>
      </View>

  
      <Text style={styles.totalAmount}>Total Amount: {totalAmount}</Text>
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

  data:{
    width: '90%',
    height: '50%',
    justifyContent: 'center',
  },


  title:{
    color: '#FD8450',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
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
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
  column: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
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
  },
  
  totalAmount:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    zIndex: 2,
    position: 'relative',
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#FD8450',
    borderRadius: 30,

    marginTop: 100,
  },

  list:{
    width: '100%',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },

})