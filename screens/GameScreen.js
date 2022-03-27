
import { Text, StyleSheet, View, Alert } from 'react-native';
import Title from '../components/Title';

import { useState, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Ionicons } from '@expo/vector-icons';



function generateRandomBetween(min, max, exclude) {

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);

    } else {
        return rndNum;
    }
}

let min = 1;
let max = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        console.log('is game over', typeof currentGuess, typeof userNumber, currentGuess, userNumber, currentGuess === userNumber);
        if (currentGuess === userNumber) {
            console.log('entered if')
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);


    function nextGuessHandler(direction) {

        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {

            Alert.alert("Don't lie!", "Enter a true number ", [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            max = currentGuess;

        } else {
            min = currentGuess + 1;

        }
        const newRandNum = generateRandomBetween(min, max, currentGuess);
        setCurrentGuess(newRandNum);
    }

    return (
        <View style={style.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <View>
                    <InstructionText style={style.text}>Higher or lower?</InstructionText>
                    {/* <Text style={style.text}>Higher or lower?</Text> */}
                    <View style={style.rowButtons}>
                        <View style={style.flex1}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name='remove' size={24} color={'white'} />
                            </PrimaryButton>
                        </View>
                        <View style={style.flex1}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name='add' size={24} color={'white'} />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>

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
    text: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 12,
        marginHorizontal: 24,
        fontSize: 24,
    },
});