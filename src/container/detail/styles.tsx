import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 2
    },
    imageView: {
        flex: 2.51,
        backgroundColor: 'black',
        margin: 10,
        borderRadius: 5
    },
    infoView: {
        flex: 1,
        height: '100%',
        alignItems: 'center'
    },
    fav: {
        width: 30,
        height: 30,
        marginVertical: 20

    },
    descriptionView: {
        flex: .5,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center'

    },
    image: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 5,
        resizeMode: 'stretch'
    },
    text: {
    }
})