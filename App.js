import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  // empty array to manage List of goals
  const [courseGoals, setCoursGoals] = useState([]);
  // this function is to handel get data and submiting it
  function addGoalHandler(enteredGoalText) {
    setCoursGoals((currentCourseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };


  return (
    <View style={
      style.appContainer
    }>
      <GoalInput onAddGoal= {addGoalHandler}/>

      <View style={style.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {

          return <GoalItem text={itemData.item.text} />;
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