import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from '../styles';
import { View } from 'react-native';
import LoadingButton from '../components/LoadingButton';
import I18n from '../strings/I18n';

const TAG = '~SetupSourceScreen~';

@inject('store')
@observer
class SetupSourceScreen extends React.Component {
    static navigationOptions = {
        title: I18n.t('setUpTitle')
    };
    state = {
        source: null
    };
    
    componentDidMount = () => {
        this.setState({ source: this.props.store.source });
    }

    _setUpButtonClick = async () => {
        this.props.store.setSource(this.state.source);
        this.props.navigation.navigate('Feed');
    }

    render() {
        return (
            <View>
                <TextInput
                    mode='outlined'
                    style={styles.input}
                    label={I18n.t('source')}
                    onChangeText={source => this.setState({ source })}
                    value={this.state.source}
                    theme={{
                        colors: {
                            placeholder: 'grey', text: 'black', primary: 'grey',
                            underlineColor: 'grey', background: '#003489'
                        }
                    }}
                />
                <LoadingButton style={styles.button} onPress={this._setUpButtonClick}>
                    {I18n.t('submit')}
                </LoadingButton>
            </View>

        );
    }
}

export default SetupSourceScreen;
