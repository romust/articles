import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    setUpButton: {
        width: WIDTH / 2,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#FFC234',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center'
    },

    buttonText: {
        fontSize: 16,
        textAlign: 'center'
    },
});
export default styles;
