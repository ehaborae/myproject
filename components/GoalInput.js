import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
                <Image style={style.imageCotainer} source={require('../assets/images/favicon.png')} />
                <TextInput placeholder='Yor cours egoal!' style={style.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={style.buttonsContainer}>
                    <View style={style.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color ={'green'}/>
                    </View>
                    <View style={style.space16}></View>

                    <View style={style.button}>
                        <Button title='cancel' onPress={cancelGoalHandler} color ={'red'}/>
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
            paddingBottom: 16,
            backgroundColor :'#311B6B',
        
        },
        textInput: {
            marginHorizontal: 16,
            paddingHorizontal: 12,
            padding : 6,
            width: '100%',
            color: '#311B6B',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#cccccc',
            backgroundColor: '#cccccc',
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
        imageCotainer: {
            width: 50,
            height: 50,
            marginBottom: 16,
        },

    }
);