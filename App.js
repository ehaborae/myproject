import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {


  const [userNumber, setUserNumber] = useState();

  const [gameIsOver, setGameIsOver] = useState(true);

  const [roundNumber, setRoundNumber] = useState(0);

  function restartGameHandler() {
    setUserNumber(null);
    setRoundNumber(0)
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    console.log('game over false');
    setGameIsOver(false);
  }

  function gameOverHandler() {
    console.log('game over true');
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={roundNumber} onStartNewGame={restartGameHandler} />;
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

        <SafeAreaView style={style.safeArea}>
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
  safeArea: {
    flex: 1,
  },
});