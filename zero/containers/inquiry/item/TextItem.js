/**
 * Created by zerowolf on 2018/3/29.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class TextItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={{
                width: 120,
                paddingLeft:10,
                // alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>

                <Text style={{color: 'black', fontSize: 18}}>{this.props.title}</Text>
            </View>
        );

    }
}