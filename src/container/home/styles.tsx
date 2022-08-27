import { StyleSheet, Dimensions } from "react-native";
export const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    item: {
        backgroundColor: 'black',
        width: WIDTH,
        height: 250,
        borderRadius: 10,
    },
    image: {
        height: '100%',
        overflow: 'hidden',
        borderRadius: 10,

    },
    listView: {
        marginVertical: 10
    },
    type: {
        marginVertical: 10,
        fontSize: 20,
        marginHorizontal: 10
    },
})