import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingButton from '../components/LoadingButton';
import { Alert } from "react-native"

const TAG = '~SetupSourceScreen~';

@inject('store')
@observer
class SetupSourceScreen extends React.Component {
    static navigationOptions = {
        title: 'Setup the source'
    };
    state = {
        source: null
    };
    componentDidMount = () => {
        this.setState({ source: this.props.store.source });
    }
    _setUpButtonClick = async () => {
        //this.props.store.setSource(this.state.source);
        try{
            await this.props.store.getFeed();
            this.props.navigation.navigate('Feed');
        } catch(err) {
            console.log('eeeeee', err );
                Alert.alert(
                    'Error',
                    err,
                    [     
                        {
                            text: 'OK',
                        }
                    ],
                    { cancelable: true }
                );
        }
    }

    render() {
        return (
            <ScrollView>
                <TextInput
                    mode='outlined'
                    style={styles.input}
                    label='Source'
                    onChangeText={source => this.props.store.setSource(source)}
                    value={this.props.store.source}
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'black', primary: 'grey',
                            underlineColor: 'grey', background: '#003489'
                        }
                    }}
                />
                <LoadingButton style={styles.button} onPress={this._setUpButtonClick}>
                    SUBMIT
                </LoadingButton>
            </ScrollView>

        );
    }
}

export default SetupSourceScreen;
