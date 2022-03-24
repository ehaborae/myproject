import { Text, StyleSheet } from 'react-native';



function Title({ children }) {
    return <Text style={style.textStyle}>{children}</Text>;
}
export default Title;

const style = StyleSheet.create({
    textStyle: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        padding: 12,
        borderColor: 'white',
        marginTop: 12,

    },
});