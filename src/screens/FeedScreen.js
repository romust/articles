import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles';
import FeedItem from '../components/FeedItem';
import NetInfo from "@react-native-community/netinfo";
import Alert from '../utils/Alert';
import I18n from '../strings/I18n';
const TAG = '~FeedScreen~';

@inject('store')
@observer
class FeedScreen extends React.Component {
    static navigationOptions = {
        title: I18n.t('feed')
    };
    state = {
        refreshing: false,
    };

    componentDidMount = () => {
        this.props.store.setSource('https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json');
        this.willFocusSubscription = this.props.navigation.addListener('willFocus', () => {
            this._onRefresh();
        });
        this.componentIsMount = true;
    }
    componentWillUnmount() {
        if (this.willFocusSubscription) {
            this.willFocusSubscription.remove();
        }
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
        this.setState({ refreshing: true });
        await NetInfo.fetch().then(async state => {
            if (state.isConnected) {
                try {
                    await this.props.store.getFeed();
                } catch (error) {
                    Alert.showSimpleAlert(I18n.t('error'), error);
                }
            } else {
                Alert.showSimpleAlert(I18n.t('error'), I18n.t('checkInternet'));
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
                            {I18n.t('setUpButton')}
                        </Text>
                    </TouchableOpacity>}
                data={store.articles}
                renderItem={this._renderItem}
                ListEmptyComponent={
                    <Text style={styles.message}>
                        {I18n.t('undefinedSource')}
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
