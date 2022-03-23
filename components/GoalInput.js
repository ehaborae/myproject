import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    // register a new state here
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // this function is to get data that in TextInput
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };




    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        cancelGoalHandler();
    }

    function cancelGoalHandler() {
        props.cancelGoalHandler();

    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={style.inputContainre}>
                <TextInput placeholder='Yor cours egoal!' style={style.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={style.buttonsContainer}>
                    <View style={style.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={style.space16}></View>

                    <View style={style.button}>
                        <Button title='cancel' onPress={cancelGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>

    );
};

export default GoalInput;

const style = StyleSheet.create(
    {
        inputContainre: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 16,
            justifyContent: 'center',
            paddingBottom: 30,
            borderBottomWidth: 1,
            marginBottom: 30,
            borderColor: '#cccccc',
        },
        textInput: {
            marginHorizontal: 16,
            padding: 4,
            width: '100%',
            borderWidth: 1,
            borderColor: '#cccccc',
        },
        buttonsContainer: {
            marginTop: 16,
            flexDirection: 'row',
        },
        button: {
            // width: '40%',
            flex: 1,
            backgroundColor: 'red',
        },
        space16: {
            width: 16,
        },

    }
);