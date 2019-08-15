import React from 'react';
import { Text, View, Image, Dimensions, Linking, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';

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

    _onPressExternalLink = () => {
        const link = this.props.navigation.getParam('article').link

        Alert.alert(
            'Are you sure you want to follow the external link?',
            'The link will open in your browser',
            [
                {
                    text: 'CANCEL',
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => { Linking.openURL(link) }
                }
            ],
            { cancelable: true }
        );
    }

    render() {
        const { title, date, imageUrl, description, id, link } = this.props.navigation.getParam('article')
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
                    <View style={styles.articleBottomLine}>
                        <Text style={styles.articleDate}>{moment(date).format('DD.MM.YY HH:mm')}</Text>
                        {link ? (<TouchableOpacity onPress={this._onPressExternalLink}>
                            <Icon name={'external-link'} color={'grey'} size={30} />
                        </TouchableOpacity>) : null}

                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default ArticleDetailsScreen;
