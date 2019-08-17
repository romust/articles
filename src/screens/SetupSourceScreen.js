import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingButton from '../components/LoadingButton';
import Alert from '../utils/Alert';

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
        try{
            this.props.store.setSource(this.state.source);
            this.props.navigation.navigate('Feed');
        } catch(err) {
                Alert.showSimpleAlert('Internet Error', err);
        }
    }

    render() {
        return (
            <ScrollView>
                <TextInput
                    mode='outlined'
                    style={styles.input}
                    label='Source'
                    onChangeText={source => this.setState({source})}
                    value={this.state.source}
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
