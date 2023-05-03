import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RunStats() {
  return (
    <View style={styles.container}>
      <Text style={styles.runName}>Afternoon Run</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>

          <Text style={styles.title}>Distance</Text>
          <Text style={styles.info}>2.94km</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.title}>Pace</Text>
          <Text style={styles.info}>6:10/km</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.info}>18m 10s</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginLeft:20
  },
  runName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10
  },
  infoContainer: {
    
    flexDirection: 'row',
  },
  infoCard: {
    paddingRight: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: 15,
  },
  info: {
    fontSize: 25,
  },
});
