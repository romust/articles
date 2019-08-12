import axios from 'axios';
import { Provider } from 'mobx-react/native';
import React from 'react';
import { View } from 'react-native';
import Store from './src/mobx/Store';
import AppContainer from './src/navigation/Navigation';

//axios.defaults.baseURL = 'https://gruz.bw2api.ru'; /* 'http://192.168.1.4:3008'; */
const TAG = '~App.js~';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <View style={{ flex: 1 }}>
                    <AppContainer />
                </View>
            </Provider>
        );
    }
}