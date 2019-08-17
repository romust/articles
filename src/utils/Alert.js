import { Alert } from "react-native";
import I18n from '../strings/I18n';

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
                text: I18n.t('cancel'),
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