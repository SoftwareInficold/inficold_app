import * as React from 'react';
import { Text,View,StyleSheet,Image,Button,Dimensions } from 'react-native';


export default function AlertsSent() {
  const [AlertsArr, setAlertsArr] = React.useState([])
  const fetchAlerts = ()=>{
    fetch("http://www.infilog.com/infilog/bridge/alerts_sent.php", {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        UserID: '1'
      })
    })
    .then((response) => response.json())
    .then((responseText) => {
      const result = responseText.AlertsSent;
      //alert(result);
      setAlertsArr(result);
    })
    .catch((error) => {
      //alert(error);
      console.log(error);
    });
  }
  React.useEffect(() => {
    fetchAlerts();
  },[])
  const Header = () =>{
      return(
          <View style={styles.header}>
            <Text>Arrow</Text>
            <Text>Alerts Sent</Text>
            <Text>Bell</Text>
          </View>
      )
  }
  const Alerts = () =>{
    return AlertsArr.map((item, index) => (
      <View style={styles.alertslist}>
        <Text>{item.DeviceName}</Text>
        <Text>{item.Alert} at {item.DateTime}</Text>
      </View>
    ))
  }
  return (
  <View style={styles.maincontainer}>
    <View style={styles.container1}>
      <Header />
    </View>
    <View style={styles.container2}>
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
    flex: 20,
    margin:5
  },
  alertslist:{
    padding:5
  }
})