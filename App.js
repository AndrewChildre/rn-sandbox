import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Alert, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Sleep today', key: '1'},
    {text: 'shop for stuff', key: '2'},
    {text: 'fix stuff', key: '3'},
    
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  };
  const submitHandler = (text) => {
    if(text.length > 3){
   setTodos((prevTodo) =>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodo
      ];
    })
    } else {
      Alert.alert('Damn it!', 'Must be 3 char long',[
        {text: 'Understood', onPress: ()=> console.log('alert closed')}
      ])
    }

  
  }


  // const pressHandler = (id)=>{
  //     console.log(id);
  //     setPerson((person1) => {
  //       return person1.filter(pers => pers.id != id)
  //     })

  // }


  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
       <Header />
       <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
              <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )
             
              }
             />
                
            
          </View>
       </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 10,
  },

  list: {
    marginTop: 20,
  }







  
  // item: {
  //   marginTop: 24,
  //   padding: 30,
  //   backgroundColor: 'aqua',
  //   fontSize: 24,
  //   marginHorizontal: 10,
  //   margin: 24
  // }
  // header: {
  //   backgroundColor: 'red',
  //   padding: 20
  // },
  // boldText: {
  //   fontWeight: 'bold'
  // },
  // body: {
  //   backgroundColor: 'yellow',
  //   padding: 20
  // },
  // btnContainer: {
  //   backgroundColor: 'red',
  //   marginTop: 20 
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200

  // }

});





  //  <FlatList    data={person}
  //       numColumns={2}
  //       keyExtractor={(item)=> item.id}
  //       renderItem={({item})=>(
  //         <TouchableOpacity onPress={() => pressHandler(item.id)}>
  //            <Text style={styles.item}>{item.name}</Text>
  //         </TouchableOpacity>
         
  //       )}>
     
  //     </FlatList>



    {/* <ScrollView>
    {person.map((item)=>{
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
          </View>
      )
    })}
</ScrollView> */}


      {/* <Text>Enter Name:</Text>
       <TextInput 
       multiline
      style={styles.input}
      placeholder='e.g. John Doe'
      onChangeText={(val)=>{setName(val)}}
      /> */}

      {/* <Text>Enter Age:</Text>
         <TextInput 
      style={styles.input}
      placeholder='e.g. 22'
      keyboardType='numeric'
      onChangeText={(val)=>{setAge(val)}}
      />
      <Text>
       name: {name}, age: {age}
      </Text>
      */}