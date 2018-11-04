/**
 * Created by zerowolf on 2018/3/22.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View, TouchableOpacity,
    Image
} from 'react-native';

export default class Navigator extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var params = this.props;
        return (
            <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} activeOpacity={0.5}
                              onPress={() => {
                                  params.onPress();
                              }}>
                <Image style={{width: 30, height: 30}} source={params.image}/>
                <Text style={{color: "gray", fontSize: 12,marginTop:6}}>{params.title}</Text>
            </TouchableOpacity>
        );
    }
}