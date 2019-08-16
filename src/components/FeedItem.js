import React from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import styles from '../styles';

const TAG = '~FeedItem.js~'
class FeedItem extends React.Component {
    state = {
        width: null,
        height: null,
        imageUrl: null,
    };

    componentDidMount = () => {
        
    }
    shouldComponentUpdate = () => {
        if(this.props.item.imageUrl!= this.state.imageUrl){
            this.setState({imageUrl: this.props.item.imageUrl})
            Image.getSize(this.props.item.imageUrl, (width, height) => {
                console.log(TAG, width + ' ' + height + ' ' + this.props.item.title);
                const ratio = height / width;
                const scaleWidth = Dimensions.get('window').width;
                this.setState({
                    width: scaleWidth,
                    height: scaleWidth * ratio
                });         
                  
            });
        }
        return true; 
    }

    _onPressButton = () => {
        this.props.onPressButton(this.props.item);
    };

    render() {
        const { title, shortDescription, imageUrl, imageWidth, imageHeight } = this.props.item;

        return (
            <TouchableWithoutFeedback onPress={this._onPressButton}>
                <View style={{
                    backgroundColor: 'white',
                    marginBottom: 10
                }}>
                    <Text style={styles.articleTitle}>{title}</Text>
                    <Text style={styles.articleDescription}>{shortDescription}</Text>
                    {/* {this._loadImage()} */}
                    <Image
                    style={{
                        ...styles.image,
                        width: this.state.width,
                        height: this.state.height
                    }}
                    source={{ uri: this.props.item.imageUrl }} />

                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default FeedItem;
