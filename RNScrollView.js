/**
 * Created by zerowolf on 2018/1/16.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import RNScrollViewDemo from './RNScrollViewDemo';
import jsonData from './ImageData.json';

export default class RNScrollView extends Component {
    render() {
        return (<RNScrollViewDemo imgData={jsonData.data}/>);
    }
}