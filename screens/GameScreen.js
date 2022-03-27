
import { Text, StyleSheet, View, Alert } from 'react-native';
import Title from '../components/Title';

import { useState } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';


function generateRandomeBetween(min, max, exclude) {

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum == exclude) {
        return generateRandomeBetween(min, max, exclude);

    } else {
        return rndNum;
    }
}

let min = 1;
let max = 100;

function GameScreen({ userNumber }) {
    const initlaGuess = generateRandomeBetween(min, max, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initlaGuess);

    function nextGuessHandler(direction) {

        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {

            Alert.alert("Don't lie!","test ", [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            max = currentGuess;

        } else {
            min = currentGuess + 1;

        }
        const newRandNum = generateRandomeBetween(min, max, currentGuess);
        setCurrentGuess(newRandNum);
    }

    return (
        <View style={style.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text >Heigher or lower?</Text>
                <View style={style.rowButtons}>
                    <View style={style.flex1}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <View style={style.flex1}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </View>
            <View>
                <Text >LOG REOUNDS</Text>
            </View>
        </View>

    );
}

export default GameScreen;

const style = StyleSheet.create({
    textStyle: {
        color: '#ddb52f',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        padding: 12,
        borderColor: '#ddb52f',
        marginTop: 12,

    },
    screen: {
        padding: 24,
    },
    flex1: {
        flex: 1,
    },
    rowButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});