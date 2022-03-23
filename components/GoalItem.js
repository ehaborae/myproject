import { StyleSheet, Text, View, Pressable, } from 'react-native';


function GoalItem(props) {

    return (

        <View style={style.goalItem}>
            <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{ color: '#dddddd' }}
                style={({ pressed }) => pressed && style.pressedItem}
            >
                <Text style={style.goalTextItem}>{props.text}</Text>
            </Pressable>
        </View>

    );
}

export default GoalItem;

const style = StyleSheet.create(
    {
        goalItem: {

            margin: 8,
            color: 'white',
            borderRadius: 6,
            backgroundColor: '#5e0acc',
        },
        pressedItem: {
            opacity: 0.5,
            color: '#5e0acc'
        },
        goalTextItem: {
            color: 'white',
            padding: 8,
        }
    });