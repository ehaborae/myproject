import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {


  const [userNumber, setUserNumber] = useState();

  const [gameIsOver, setGameISOver] = useState(true);

  function pickedNuberHandeler(pickedNuber) {
    setUserNumber(pickedNuber);
    console.log('game over false');
    setGameISOver(false);
  }

  function gameOverHandler() {
    console.log('game over true');
    setGameISOver(true);
  }

  let screen = <StartGameScreen onConfirmeNumber={pickedNuberHandeler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
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