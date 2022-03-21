import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [name,setName] = useState('shaun');
  const [age, setAge] = useState('30');
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1'},
    { name: 'yoshi', id: '2'},
    { name: 'loren', id: '3'},
    { name: 'Ipsum', id: '4'},
    { name: 'Wixer', id: '5'},
    { name: 'chahca', id: '6'},
    { name: 'Maccabi', id: '7'},
  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    });
  }

//FlastList if more efficient than ScrollView
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        ) }
      />

      {/* <ScrollView>
        { people.map(item => (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
        )}
      </ScrollView> */}
      
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }

});
