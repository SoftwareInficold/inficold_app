import * as React from 'react';
import { Text,View,StyleSheet,Image,Button } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={{uri:"http://www.infilog.com/inficold_app/assets/logo.png"}} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.heading}>
          INFICOLD INDIA PVT LTD
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      flex:1
    },
    container1: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flex:1.4
    },
    container2: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 40,
      flex:1
    },
    logo: {
      height: 78,
      width: 250,
    },
    space: {
      height: 30,
    },
    heading:{
      color: '#898888',
      fontSize:20
    }
  });