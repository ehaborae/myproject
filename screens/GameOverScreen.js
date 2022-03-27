import { Image, View, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen() {
    return (
        <View style={style.screenStyle}>
            <Card>
                <InstructionText
                    style={style.text}
                >
                    Game Is Over
                </InstructionText>
            </Card>
            <View
                style={style.imageContainerStyle}
            >
                <Image
                    style={style.imageStyle}
                    source={require('../assets/colorful-powder-mix-splash.jpg')}
                />
            </View>
            <Text style={style.infoText}>
                Yor phone needed
                <Text style={style.dataText}>
                    X
                </Text>
                rounds to get the number
                <Text style={style.dataText}>
                    Y
                </Text>
            </Text>
            <PrimaryButton>Start new game</PrimaryButton>
        </View>

    );
}
export default GameOverScreen;

const style = StyleSheet.create({

    screenStyle: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 12,
        marginHorizontal: 24,
        fontSize: 18,
    },
    imageContainerStyle: {
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.amper,
        // flex: 1,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        // flex: 1,
    },
    infoText: {
        margin: 8,
        fontSize: 18,
        color: 'white',
    },
    dataText: {
        fontSize: 20,
        color: Colors.amper,
    },
});

