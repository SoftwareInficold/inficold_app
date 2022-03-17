import * as React from 'react';
import { Text,View,StyleSheet,Image,Button,Dimensions,TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function SetAlert() {
  const [number, onChangeNumber] = React.useState(null);
  const conditions = ["Equal To", "Greater Than", "Less Than"]
  const devices = [""]  
  const parameters = [""]
    const Header = () =>{
      return(
        <View style={styles.header}>
          <Text>Arrow</Text>
          <Text>Set Alert</Text>
        </View>
      )
    }
    const Alerts = () =>{
      return(
        <View style={styles.alertslist}>
          <Text>Tumkur 40ft A</Text>
          <Text>Cold Room Temperature C 1 at Nov 18, 2022 12:32</Text>
        </View>
      )
    }
    const AlertForm = () =>{
      return(
        <View>
          <Text>Device</Text>
          <SelectDropdown
            data={devices}
          />
          <Text>Parameter</Text>
          <SelectDropdown
            data={parameters}
          />
          <Text>Condition</Text>
          <SelectDropdown
            data={conditions}
          />
          <Text>Value</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Value"
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
        <View style={styles.container2}>
          <Alerts />
          <Alerts />
          <Alerts />
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