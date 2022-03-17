import * as React from 'react';
import { Text,View,StyleSheet,Image,Button,Dimensions,TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function AddDevice() {
  const [number, onChangeNumber] = React.useState(null);
  const conditions = ["Equal To", "Greater Than", "Less Than"]
  const devices = [""]  
  const parameters = [""]
    const Header = () =>{
      return(
        <View style={styles.header}>
          <Text>Arrow</Text>
          <Text>Add Device</Text>
        </View>
      )
    }
    const AlertForm = () =>{
      return(
        <View>
          <Text>Mac ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="20:6F:20:0B:B3:20"
            keyboardType="numeric"
          />
          <Text>Device Alias</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Device Name"
            keyboardType="numeric"
          />
          <Text>Location</Text>
          <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Latitude"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Longitude"
            keyboardType="numeric"
          />
          </View>
          <Text>Device OTP</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Device OTP"
            keyboardType="numeric"
          />
          <Button title='SUBMIT' />
        </View>
      )
    }
    return (
    <View style={styles.maincontainer}>
        <View style={styles.container1}>
            <Header />
        </View>
        <View style={styles.container3}>
          <AlertForm />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth:1,
    width: Dimensions.get('window').width
  },
  maincontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  container1:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:0,
    flex: 1
  },
  container2:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:1,
    flex: 9,
    margin:5
  },
  container3:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:0,
    flex: 11,
    margin:5
  },
  alertslist:{
    padding:5
  },
  input: {
    height: 40,
    margin: 4,
    borderWidth: 1,
    padding: 10,
  }
})