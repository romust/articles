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

    componentDidMount = async () => {
        //this.props.store.setSource('https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json');
        //await this.props.store.getFeed();
        //console.log('articles' + JSON.stringify(this.props.store.articles));
    }

    _setUpButtonClick = async () => {
        this.props.store.setSource(this.state.source);
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
                    onChangeText={source => this.setState({ source })}
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
