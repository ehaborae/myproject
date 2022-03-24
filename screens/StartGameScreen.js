
import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';



//this is the main class in this screen here we return UI
function StartGameScreen() {

    return (
        <View style={style.inputContainer}>
            <TextInput
                style={
                    style.numberInput
                }
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}

            />
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>

                <View style={style.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
});