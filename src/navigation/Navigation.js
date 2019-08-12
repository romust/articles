import FeedScreen from '../screens/FeedScreen';
//import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

export default createAppContainer(
    createStackNavigator(
        //свитч проверки авторизации
        {
            Articles: FeedScreen,
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