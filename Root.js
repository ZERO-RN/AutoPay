/**
 * Created by zerowolf on 2018/3/27.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

import {Provider, connect} from 'react-redux';
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}