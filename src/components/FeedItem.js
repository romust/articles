import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class FeedItem extends React.Component {
    // _onPressButton = () => {
    //     this.props.onPressButton(this.props.order);
    // };
    componentDidMount = () => {
        console.log('uhuhuhuhuhuhuh')
    }
    render() {
        const { title } = this.props;
        console.log('ouohouhouhouhouh');
        
        return (
            <View>
                <Text>{title}</Text>
            </View>
        );
    }
}

export default FeedItem;
