/**
 *
 * Created by zerowolf on 2018/3/29.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions,TextInput
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class _TextInput extends Component{
    constructor(props){
        super(props);

    }s

    render(){
        let props = this.props;
       return (
       <TextInput
           ref="inputs"
           underlineColorAndroid={'transparent'}
           style={{
               borderRadius: 5,
               width: props.width?props.width:50,
               marginLeft: props.marginLeft?20:0,
               height: 35,
               backgroundColor: 'white',
               borderWidth: 1,
               borderColor: '#d3cde0',
               textAlign: 'center',
           }}
           keyboardType={'numeric'} //数字键盘
           placeholder={props.placeholder}
           value={props.value}
           onChangeText={(text) => {
               props.onChangeText(text);
           }}/>

        )
    }
}
