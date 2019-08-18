import FeedScreen from '../screens/FeedScreen';
import SetupSourceScreen from '../screens/SetupSourceScreen';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

export default createAppContainer(
    createStackNavigator(
        {
            Feed: FeedScreen,
            SetupSource: SetupSourceScreen,
            ArticleDetails: ArticleDetailsScreen
        },
        {
            resetOnBlur: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#FFC234'
                }
            }
        }
    )
);