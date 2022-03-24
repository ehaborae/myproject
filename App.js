import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {


  return (
    <View style={
      style.rootScreen
    }>

      <ImageBackground
        source={require('./assets/splash.png')}
        resizeMode='cover'
        style={style.rootScreen}
        imageStyle={style.rootScreen}
      >
        <StartGameScreen />
      </ImageBackground>

    </View>
  );


}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#72063c',
    },
});