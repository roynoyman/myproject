import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [name,setName] = useState('shaun');
  const [age, setAge] = useState('30');
  

  return (
    <View style={styles.container}>
      <Text>Input Name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g john Doe'
        onChangeText={(val) => setName(val)}/>
      <Text>Input Age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='100'
        onChangeText={(val) => setAge(val)}/>
      <Text></Text>
      <Text style={styles.boldText}>name: {name}, age: {age} </Text>

    </View>
  );
}
//style sheet use in view>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200 
  }
});
