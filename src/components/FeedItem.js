import React from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles';

const TAG = '~FeedItem.js~'
class FeedItem extends React.Component {
    state = {
        width: null,
        height: null
    };
    componentDidMount = () => {
        Image.getSize(this.props.item.imageUrl, (width, height) => {
            const ratio = height / width;
            const scaleWidth = Dimensions.get('window').width;
            const scaleHeight = scaleWidth * ratio;
            this.setState({ width: scaleWidth, height: scaleHeight });
        });
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
