import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import styles from '../styles';

class FeedItem extends React.Component {
    // _onPressButton = () => {
    //     this.props.onPressButton(this.props.order);
    // };
    state = {
        width: null,
        height: null
    };
    componentDidMount = () => {
        Image.getSize(this.props.imageUrl, (width, height) => {
            const ratio = height / width;
            const scaleWidth = Dimensions.get('window').width;
            const scaleHeight = scaleWidth * ratio;
            this.setState({ width: scaleWidth, height: scaleHeight });
        });
    }
    render() {
        const { title, shortDescription, imageUrl } = this.props;
        // const html = `
        //     <!DOCTYPE html>
        //     <html>
        //     <head>
        //         <style type="text/css">
        //             body {
        //                 font-family: Lohit-Gujarati;
        //                 font-size: 32pt;
        //                 color: black;
        //                 padding: 0px 10px 10px 10px;
        //             }

        //             p {
        //                 text-align: justify;
        //             }
        //         </style>
        //     </head>
        //     <body>
        //         ${shortDescription}
        //     </body>
        //     </html>
        // `;
        //const { width: windowWidth } = Dimensions.get('window')

        return (
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

                {/* <WebView source={{
                    html: html,
                }}
                    originWhitelist={['*']}
                    style={{ height: 40 }} />*/}
            </View>
        );
    }
}

export default FeedItem;
