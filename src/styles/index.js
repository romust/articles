import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edeef0'
    },
    setUpButton: {
        width: WIDTH / 2,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFC234'
    },
    articleTitle: {
        fontSize: 24,
        marginLeft: 16,
        marginTop: 16
    },
    articleDescription: {
        fontSize: 16,
        marginHorizontal: 16,
        marginVertical: 16
    },
    image: {
        backgroundColor: 'black',//edeef0
    }
});
export default styles;
