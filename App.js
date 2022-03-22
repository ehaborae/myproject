import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {


  return (
    <View style={
      {padding:20}
    }>
      <Button title='My First Button' />
      <View >
        <TextInput />
        <Text>
        Ehab
        </Text>
      </View>
      <Button title='My First Button' />
    </View>
  );
}