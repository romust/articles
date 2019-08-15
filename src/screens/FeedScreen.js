import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';
import FeedItem from '../components/FeedItem';

const TAG = '~MainScreen~';

@inject('store')
@observer
class FeedScreen extends React.Component {
    static navigationOptions = {
        title: 'Feed'
    };
    state = {
        refreshing: false,
    };

    componentDidMount = async () => {
        this.props.store.setSource('https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json');
        this._onRefresh();
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
        try {
            await this.props.store.getFeed();
        } catch (error) {
            console.log(TAG, error);

        }

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
                style={styles.container}
            />
        );
    }
}

export default FeedScreen;
