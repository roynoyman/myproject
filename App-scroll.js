import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [name,setName] = useState('shaun');
  const [age, setAge] = useState('30');
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'loren', key: '3'},
    { name: 'Ipsum', key: '4'},
    { name: 'Wixer', key: '5'},
    { name: 'chahca', key: '6'},
    { name: 'Maccabi', key: '7'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
        )}
      </ScrollView>
      
    </View>
  );
}
//style sheet use in view>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignContent; 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }

});
