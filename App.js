import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {


  return (
    <View style={
      { padding: 50, flexDirection: 'row',width:'100%',height:500 ,justifyContent:'space-evenly',alignItems:'stretch'}
    }>
      <View style={{
        flex:1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <Text>1</Text>
      </View>
      <View style={{
        flex:2,
        backgroundColor: 'blue',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <Text>1</Text>
      </View>
      <View style={{
        backgroundColor: 'green',
        width: 20,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <Text>1</Text>
      </View>
    </View>
  );
}