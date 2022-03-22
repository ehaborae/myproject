import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {


  return (
    <View style={
      style.appContainer
    }>
      <View style = {
        style.inputContainre
      }>
        <TextInput placeholder='Yor cours egoal!' style = {style.textInput}/>
        <Button title='Add Goal' />
      </View>
      <View >
        <Text>List Of Goals...</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight:8,
  },
});