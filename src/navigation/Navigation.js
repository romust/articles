import FeedScreen from '../screens/FeedScreen';
import SetupSourceScreen from '../screens/SetupSourceScreen'
//import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

export default createAppContainer(
    createStackNavigator(
        //свитч проверки авторизации
        {
            Feed: FeedScreen,
            SetupSource: SetupSourceScreen
            //rticleDetails: ArticleDetailsScreen
        },
        {
            //initialRouteName: 'Aticles',
            resetOnBlur: false,
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#FFC234'
                }
            }
        }
    )
);