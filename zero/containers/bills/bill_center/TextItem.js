/**
 * Created by zerowolf on 2018/3/22.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View, TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
const {width, height}= Dimensions.get('window');
export default class Navigator extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var params = this.props;
        return (
            <View style={{
                marginLeft:10,
                marginTop:5,
                width:width-20,
                height: 40,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                <View style={{
                    width: 3,
                    height: 10,
                    backgroundColor: 'red',
                }}/>
                <Text style={{marginLeft: 5, fontSize: 13, color: 'black', flex: 1}}>{params.title}</Text>
            </View>

        );
    }
}