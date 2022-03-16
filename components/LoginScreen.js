import * as React from 'react';
import { Text,View,StyleSheet,Image,Button } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:"http://www.infilog.com/inficold_app/assets/logo.png"}} />
      <View style={styles.space} />
      <Button title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: 72,
    width: 230,
  },
  space: {
    height: 30,
  }
});
