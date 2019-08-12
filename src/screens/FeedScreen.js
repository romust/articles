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

    _renderItem = ({ item }) => (
        <FeedItem title={item.title} />
    )


render() {
    const { store } = this.props;
    return (
        <FlatList
            ListHeaderComponent={
                <TouchableOpacity style={styles.setUpButton} onPress={()=>{console.log('click');
                }}><Text style={styles.buttonText}>Setup the source</Text></TouchableOpacity>}
            data={[{ title: 'test1', id: '1' }, { title: 'Test2', id: '2' }]}
            renderItem={this._renderItem}
            ListEmptyComponent={<Text style={styles.mainFontUserType}>There is not available articles</Text>}
            keyExtractor={(item) => item.id}
        />
    );
}
}

export default FeedScreen;
