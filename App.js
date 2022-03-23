import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {


  const [modalIsVisible, setModalVisibility] = useState(false);

  function startAddGoalHandeler() {
    setModalVisibility(true);
  }

  const [courseGoals, setCoursGoals] = useState([]);
  // this function is to handel get data and submiting it
  function addGoalHandler(enteredGoalText) {
    setCoursGoals((currentCourseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };


  function deleteGoalHandeler(id) {
    setCoursGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={style.appContainer}>


      <Button title='Add new Goal' color='#5e0acc' onPress={startAddGoalHandeler} />


      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />}

      <View style={style.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {

          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandeler}
            />
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