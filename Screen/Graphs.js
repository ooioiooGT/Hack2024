
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import React, { useState } from 'react';
import Dropdown from '../components/DropDown';
import Nav from '../components/Nav';

const Graphs = () => {
  const [progress, setProgress] = React.useState(90); // Set initial progress

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spent</Text>
      <Dropdown />

      <View>
      <Text style={styles.percentage}>{progress}%</Text>
        <AnimatedCircularProgress
          size={200} // Diameter of the circle
          width={30} // Thickness of the progress bar
          fill={progress} // Current progress (0-100)
          tintColor="#FD8450" // Color of the progress bar
          backgroundColor="#fff" // Color of the background circle
          onAnimationComplete={() => console.log('Animation completed')}
          onProgressChange={handleProgressChange}
          style={{ marginTop: 30 }}

        />
      </View>

      <Nav />

      {/* Optional: Add text or other content below the ring chart */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#302D43',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    position: 'relative',
    top: -90
  },

  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 70,
  }
});

export default Graphs;
