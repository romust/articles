import { Alert } from "react-native";

function showSimpleAlert(title, message){
    Alert.alert(
        title,
        message,
        [     
            {
                text: 'OK',
            }
        ],
        { cancelable: true }
    );
}

function showDifficultAlert(title, message, onPress){
    Alert.alert(
        title,
        message,
        [
            {
                text: 'CANCEL',
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: onPress
            }
        ],
        { cancelable: true }
    );
}

export default {showSimpleAlert, showDifficultAlert}