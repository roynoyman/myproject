import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState('shaun');
  const [person, setPerson] = useState({name: 'mario', age:40});
  
  const clickHandler = () =>{
    setName('chun-li')
    setPerson({name: 'luigi', age:99})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>My name is {name} </Text>
      <Text>His name is {person.name} and his age is {person.age} .</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' ON onPress={clickHandler}/>
      </View>
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
  buttonContainer: {
    marginTop: 20
  },

});
