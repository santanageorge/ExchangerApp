import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {

  

  const getData = async()=>{
    const apiUrl = 'http://10.0.2.2:5104'
    const response = await axios.get(apiUrl+"/weatherforecast/GetTestData");
    console.log(response.data);
  }

  const postData = async()=>{
    const apiUrl = 'http://10.0.2.2:5104'
    const response = await axios.post(apiUrl+"/weatherforecast/UpdateTestData",{testID:1, testName:"from mobile"});
    console.log(response.data);
  }
  
  getData();
  postData();

  return (
    <View style={styles.container}>
      <Text>Call Sample Data!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
