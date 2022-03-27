import {Text, StyleSheet} from 'react-native';

function InstructionText({children, style}){

    return(
        <Text style={[style.text, style]}>{children}</Text>
    );
}

export default InstructionText;

const style = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 12, 
        marginHorizontal: 24,
        fontSize: 18,
    },
});