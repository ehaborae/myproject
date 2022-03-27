
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Colors from '../constants/colors';



//this is the main class in this screen here we return UI
function StartGameScreen({ onConfirmNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        console.log('confirm');
        console.log(enteredNumber);
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert ...
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onConfirmNumber(chosenNumber);

    }

    function resetInputHandler() {
        console.log('Reset');
        setEnteredNumber('');
    }

    return (
        <View style={style.rootContainer}>
            <Title>Guess A Number</Title>
            <Card>
            <Text style={style.textStyle}>Enter a number</Text>
                <TextInput
                    style={
                        style.numberInput
                    }
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}

                />
                <View style={style.buttonsContainer}>
                    <View style={style.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>

                    <View style={style.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>

                </View>
            </Card>
        </View>
    );

}

// this code is used to export this class as screen to can connect into
export default StartGameScreen;

const style = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primaryLite,

        //shadow for android
        elevation: 4,

        // shadow for IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.amper,
        borderBottomWidth: 2,
        color: Colors.amper,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    textStyle: {
        color: 'white',
    },

    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
});