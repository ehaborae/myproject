import { StyleSheet, Text, View, Pressable, } from 'react-native';


function GoalItem(props) {

    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={style.goalItem}>
                <Text style={style.goalTextItem}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const style = StyleSheet.create(
    {
        goalItem: {
            padding: 8,
            margin: 8,
            color: 'white',
            borderRadius: 6,
            backgroundColor: '#5e0acc',
        },
        goalTextItem: {
            color: 'white',
        }
    });