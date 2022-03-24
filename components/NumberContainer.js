import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NumberContainer({ children }) {


    return (
        <View style={style.container}>
            <Text style={style.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const style = StyleSheet.create({

    container: {
        borderWidth: 4,
        borderColor: Colors.amper,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.amper,
        fontSize: 36,
        fontWeight: 'bold',
    },
});