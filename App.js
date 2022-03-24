import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import Colors from './constants/colors';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {


  const [userNumber, setUserNumber] = useState();

  function pickedNuberHandeler(pickedNuber) {
    setUserNumber(pickedNuber);
  }

  let screen = <StartGameScreen onConfirmeNumber={pickedNuberHandeler} />;
  if (userNumber) {
    screen = <GameScreen guessedNumber={userNumber} />;
  }


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

        <SafeAreaView>
          {screen}
        </SafeAreaView>

      </ImageBackground>

    </View>
  );


}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});