import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edeef0'
    },
    button: {
        width: WIDTH / 2,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'grey',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    setUpButton: {
        width: WIDTH, // 2,
        height: 45,
        //borderRadius: 25,
        backgroundColor: 'grey',
        justifyContent: 'center',
        //marginTop: 10,
        marginBottom: 10,
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
        marginVertical: 16,
        textAlign: 'justify'
    },
    articleDate: {
        fontSize: 14,
        //marginHorizontal: 16,
        color: 'grey'
    },
    articleBottomLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //height: 56,
        marginHorizontal: 24
        //padding: 12
    },
    image: {
        backgroundColor: 'black',//edeef0
    },
    input: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 4
    },
    message: {
        alignSelf: 'center',
        height: '100%',
        marginTop: '60%',
        fontSize: 16,
        textAlign: 'center'
    }
});
export default styles;
