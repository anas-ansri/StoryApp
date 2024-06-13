import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import StorytellingSvg from '../../assets/storytelling.svg'; // Adjust the path as needed

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StorytellingSvg style={styles.backgroundSvg} />
      <LinearGradient
        colors={['#6200EE', '#3700B3']}
        style={styles.overlay}
      >
        <Text style={styles.welcomeText}>Welcome to Story Writer</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Write New Story')}
        >
          <Ionicons name="create-outline" size={24} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Write a Story</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundSvg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    paddingBottom: 70,
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;