import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outPutText, setOutPutText] = useState('Open up App.js to start working on your app!');
  const [outPutText2, setOutPutText2] = useState(outPutText);

  return (
    <View style={styles.container}>
      <Text>{outPutText}</Text>
      <Button title='My First Button' onPress={
        () => setOutPutText('Changed Text!')
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
