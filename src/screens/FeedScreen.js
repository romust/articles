import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import FeedItem from '../components/FeedItem';
import NetInfo from "@react-native-community/netinfo";

const TAG = '~FeedScreen~';

@inject('store')
@observer
class FeedScreen extends React.Component {
    static navigationOptions = {
        title: 'Feed'
    };
    state = {
        refreshing: false,
    };

    timeoutsSet = new Set();

    componentDidMount = async () => {
        this.props.store.setSource('https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json');
        
        this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
            this._onRefresh();
        });
        this.componentIsMount = true;
    }
    componentWillUnmount() {
		for (let timeout of this.timeoutsSet) {
			clearTimeout(timeout);
		}
		this.timeoutsSet.clear();
		this.componentIsMount = false;
	}

    _renderItem = ({ item }) => (
        <FeedItem item={item} onPressButton={this.onItemPress} />
    )
    _setUpButtonClick = () => {
        this.props.navigation.navigate('SetupSource');
    }
    onItemPress = (article) => {
        this.props.navigation.navigate('ArticleDetails', { article });
    }

    _onRefresh = async () => {
        this.setState({refreshing: true});
        NetInfo.fetch().then(async state => {
            if(state.isConnected){
                try {
                    await this.props.store.getFeed();
                } catch (error) {
                    Alert.alert(
                        'Internet Error',
                        error,
                        [     
                            {
                                text: 'OK',
                            }
                        ],
                        { cancelable: true }
                    );
                }
            } else {
                Alert.alert(
                    'Internet Error',
                    'Check your internet connection',
                    [     
                        {
                            text: 'OK',
                        }
                    ],
                    { cancelable: true }
                );
            }
          });
        if (this.componentIsMount) {
            this.setState({ refreshing: false });
        }
    };

    render() {
        const { store } = this.props;
        return (
            <FlatList
                ListHeaderComponent={
                    <TouchableOpacity style={styles.setUpButton} onPress={this._setUpButtonClick}>
                        <Text style={styles.buttonText}>
                            SETUP THE SOURCE
                        </Text>
                    </TouchableOpacity>}
                data={store.articles}
                renderItem={this._renderItem}
                ListEmptyComponent={
                    <Text style={styles.message}>
                        The source is not defined
                    </Text>
                }
                keyExtractor={(item) => item.id}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                extraData={this.props}
                style={styles.container}
            />
        );
    }
}

export default FeedScreen;
