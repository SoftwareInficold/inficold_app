import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import AlertsSent from './components/AlertsSent';

function App() {
  
  return (
    <View style={styles.container}>
     <SplashScreen />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.statusBarHeight,
    flex: 1
  }
});

export default App;
