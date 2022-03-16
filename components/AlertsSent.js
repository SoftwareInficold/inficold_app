import * as React from 'react';
import { Text,View,StyleSheet,Image,Button } from 'react-native';

export default function AlertsSent() {
    const Header = () =>{
        return(
            <View style={styles.header}>
              <Text>Arrow</Text>
              <Text>Heading</Text>
              <Text>Bell</Text>
            </View>
        )
    }
    return (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Header />
        </View>
        <View style={styles.container2}>
            <Text>fgrthrthtrhbrth</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: '',
      flex:1
    },
    container1: {
      alignItems: 'center',
      justifyContent: '',
      flex:1.4
    },
    container2: {
      alignItems: 'center',
      justifyContent: '',
      margin: 5,
      borderWidth:1,
      flex:11
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderWidth:1,
        flex:1
      },
  });