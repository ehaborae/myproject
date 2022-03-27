import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';



function Title({ children }) {
    return <Text style={style.textStyle}>{children}</Text>;
}
export default Title;

const style = StyleSheet.create({
    textStyle: {
        color: Colors.amper,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 0 : 2,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        padding: 12,
        borderColor: Colors.amper,
        marginTop: 12,
        borderRadius: 6,

    },
});