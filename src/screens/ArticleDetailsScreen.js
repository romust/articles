import { inject, observer } from 'mobx-react/native';import React from 'react';
import { Text, View, Image, Dimensions, } from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

const TAG = '~ArticleDetailsScreen~';

class ArticleDetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };
    state = {
        width: null,
        height: null
    };
    componentDidMount = () => {
        Image.getSize(this.props.navigation.getParam('article').imageUrl, (width, height) => {
            const ratio = height / width;
            const scaleWidth = Dimensions.get('window').width;
            const scaleHeight = scaleWidth * ratio;
            this.setState({ width: scaleWidth, height: scaleHeight });
        });
    }

    render() {
        const { title, link, date, imageUrl, description, id } = this.props.navigation.getParam('article')
        return (
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    marginBottom: 10
                }}>
                    
                    <Image
                        style={{
                            ...styles.image,
                            width: this.state.width,
                            height: this.state.height
                        }}
                        source={{ uri: imageUrl }} />
                    <Text style={styles.articleTitle}>{title}</Text>
                    <Text style={styles.articleDescription}>{description}</Text>
                    
                </View>
            </ScrollView>

        );
    }
}

export default ArticleDetailsScreen;
