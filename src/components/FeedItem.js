import React from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles';
import ImageUtils from '../utils/ImageUtils';

const TAG = '~FeedItem.js~'
class FeedItem extends React.Component {
    state = {
        width: null,
        height: null,
        imageUrl: null,
    };

    shouldComponentUpdate = async () => {
        if (this.props.item.imageUrl != this.state.imageUrl) {
            const { width, height } = await ImageUtils.getSize(this.props.item.imageUrl);
            this.setState({ width, height, imageUrl: this.props.item.imageUrl });
            return false;
        } else {
            return true;
        }
    }

    _onPressButton = () => {
        this.props.onPressButton(this.props.item);
    };

    render() {
        const { title, shortDescription, imageUrl } = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={{
                    backgroundColor: 'white',
                    marginBottom: 10
                }}>
                    <Text style={styles.articleTitle}>{title}</Text>
                    <Text style={styles.articleDescription}>{shortDescription}</Text>
                    <Image
                        style={{
                            ...styles.image,
                            width: this.state.width,
                            height: this.state.height
                        }}
                        source={{ uri: imageUrl }} />

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default FeedItem;
