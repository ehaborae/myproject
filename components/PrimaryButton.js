import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({ children , onPress}) {

    return (
        <View style={style.buttonOuterContainer}>
            <Pressable onPress={onPress} android_ripple={{ color: Colors.primaryLite }} style={({ pressed }) => pressed ? [style.buttonInnerContainer, style.pressed] : style.buttonInnerContainer}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({

    buttonOuterContainer: {
        overflow: 'hidden',
        borderRadius: 8,
        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.red,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize:18,
    },
    pressed: {
        opacity: 0.75,
    },
});