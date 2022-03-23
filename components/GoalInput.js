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
    }

    return (
        <Modal visible = {props.visible} animationType = 'slide' >
            <View style={
                style.inputContainre
            }>
                <TextInput placeholder='Yor cours egoal!' style={style.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </Modal>

    );
};

export default GoalInput;

const style = StyleSheet.create(
    {
        inputContainre: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 30,
            borderBottomWidth: 1,
            flex: 1,
            marginBottom: 30,
            borderColor: '#cccccc',
        },
        textInput: {
            padding: 4,
            paddingLeft: 8,
            borderWidth: 1,
            borderColor: '#cccccc',
            flex: 1,
            marginRight: 8,
        },

    }
);