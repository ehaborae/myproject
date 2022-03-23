import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  // register a new state here
  const [enteredGoalText, setEnteredGoalText] = useState('');
  // empty array to manage List of goals
  const [courseGoals, setCoursGoals] = useState([]);

  // this function is to get data that in TextInput
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    // console.log(enteredText);
  };


  // this function is to handel get data and submiting it
  function addGoalHandler() {
    setCoursGoals((currentCourseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };


  return (
    <View style={
      style.appContainer
    }>
      <View style={
        style.inputContainre
      }>
        <TextInput placeholder='Yor cours egoal!' style={style.textInput} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={style.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {

          return (
            <View style={style.goalItem}>
              <Text style={style.goalTextItem}>{itemData.item.text}</Text>
            </View>
          );
        }} keyExtractor={(item, index) => {
          return item.id;
        }} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 30,
    // height:'100%',
    flex: 1,
    width: '100%'

  },
  inputContainre: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    borderBottomWidth: 1,
    flex: 1,
    marginBottom: 30,
    borderColor: '#cccccc',
  },
  textInput: {
    padding: 4,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    color: 'white',
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalTextItem: {
    color: 'white',
  }
});