import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../styles';
import FeedItem from '../components/FeedItem';
import { ScrollView } from 'react-native-gesture-handler';

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
        await this.props.store.getFeed();
        this.props.navigation.navigate('Feed');
    }

    render() {
        const { store } = this.props;
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
                <TouchableOpacity style={styles.setUpButton} onPress={this._setUpButtonClick}>
                    <Text style={styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

export default SetupSourceScreen;
