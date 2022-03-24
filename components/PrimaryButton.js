import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({ children , onPress}) {

    return (
        <View style={style.buttonOuterContariner}>
            <Pressable onPress={onPress} android_ripple={{ color: Colors.primaryLite }} style={({ pressed }) => pressed ? [style.buttonInnerContariner, style.pressed] : style.buttonInnerContariner}>
                <Text style={style.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const style = StyleSheet.create({

    buttonOuterContariner: {
        overflow: 'hidden',
        borderRadius: 8,
        margin: 4,
    },
    buttonInnerContariner: {
        backgroundColor: Colors.primary,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 12,
        marginHorizontal: 24,
    },
    pressed: {
        opacity: 0.75,
    },
});