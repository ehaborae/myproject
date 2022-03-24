
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';



//this is the main class in this screen here we return UI
function StartGameScreen({ onConfirmeNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandeler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmeInputHandeler() {
        console.log('confirme');
        console.log(enteredNumber);
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert ...
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandeler }]
            );
            return;
        }

        onConfirmeNumber(chosenNumber);

    }

    function resetInputHandeler() {
        console.log('Reset');
        setEnteredNumber('');
    }

    return (
        <View style={style.inputContainer}>

            <Text style={style.textStyle}>Gess A Number</Text>
            <TextInput
                style={
                    style.numberInput
                }
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandeler}

            />
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandeler}>Reset</PrimaryButton>
                </View>

                <View style={style.buttonContainer}>
                    <PrimaryButton onPress={confirmeInputHandeler}>Confirm</PrimaryButton>
                </View>

            </View>
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
        marginTop: 100,
        flexDirection: 'column',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#4e0329',

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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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
});