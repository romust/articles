import { inject, observer } from 'mobx-react/native';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
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
        notification: {},
        refreshing: false,
        message: '',
    };

    componentDidMount = async () => {
        //this.props.store.setSource('https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json');
        await this.props.store.getFeed();
        console.log('articles' + JSON.stringify(this.props.store.articles));
    }

    _renderItem = ({ item }) => (
        <FeedItem title={item.title} shortDescription={item.shortDescription} imageUrl={item.imageUrl} onPressButton={this.onItemPress} />
    )
    _setUpButtonClick = () => {
        this.props.navigation.navigate('SetupSource');
    }
    onItemPress = () => {
        this.props.navigation.navigate('ArticleDetails');
        console.log('clllllll');
        
    }

    render() {
        const { store } = this.props;
        return (
            <FlatList
                ListHeaderComponent={
                    <TouchableOpacity style={styles.setUpButton} onPress={this._setUpButtonClick}>
                        <Text style={styles.buttonText}>SETUP THE SOURCE</Text></TouchableOpacity>}
                data={store.articles}
                renderItem={this._renderItem}
                ListEmptyComponent={<Text>There is not available articles</Text>}
                keyExtractor={(item) => item.id}
                style={styles.container}
            />
        );
    }
}

export default FeedScreen;
