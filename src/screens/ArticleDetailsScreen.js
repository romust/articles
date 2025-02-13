import React from 'react';
import { Text, View, Image, Dimensions, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import Alert from '../utils/Alert';
import I18n from '../strings/I18n';
import ImageUtils from '../utils/ImageUtils';

const TAG = '~ArticleDetailsScreen~';

class ArticleDetailsScreen extends React.Component {
    static navigationOptions = {
        title: I18n.t('details')
    };
    state = {
        width: null,
        height: null
    };
    componentDidMount = () => {
        ImageUtils.getSize(this.props.navigation.getParam('article').imageUrl, (width, height) => {
            this.setState({ width, height });
        });
    }

    _onPressExternalLink = () => {
        const link = this.props.navigation.getParam('article').link
        Alert.showDifficultAlert(I18n.t('externalLinkTitle'),
            I18n.t('externalLinkText'), () => { Linking.openURL(link) });
    }

    render() {
        const { title, date, imageUrl, description, link } = this.props.navigation.getParam('article')
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
                        <Text style={styles.articleDate}>
                            {moment(date).format('DD.MM.YY HH:mm')}
                        </Text>
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
