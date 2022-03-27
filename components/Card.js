import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Colors from '../constants/colors';

function Card({children}) {
    return (
        <View style={style.inputContainer}>
            {children}
        </View>
    );

}

export default Card;


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
});