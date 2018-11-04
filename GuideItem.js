/**
 * Created by zerowolf on 2018/1/10.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,
    TouchableOpacity
} from 'react-native';
import SizeUtil from './zero/utils/SizeUtil';
import OptionsUtil from './zero/utils/OptionsUtil';
import ButtonView from './zero/view/ButtonView';
import Icon from "react-native-vector-icons/Ionicons";

import MyTextInput from './zero/view/MyTextInput'
import Item from './GuideItem'
import TouchableItem from "./node_modules/react-navigation/lib/views/TouchableItem";

export default class Navigator extends Component{
    constructor(props){
        super(props);

    }

    render(){
        let params = this.props;
       return (
           <TouchableOpacity activeOpacity={0.5} style={{marginBottom:20,
               borderWidth: 1, borderColor: '#25b1d4', width: SizeUtil.width - 60, height: 50,
               justifyContent: 'center', alignItems: 'center'
           }}
                             onPress={() => {
                                 params.onPress();
                             }}>
               <Text style={{fontSize: 16, color: '#25b1d4'}}>{params.title}</Text>
           </TouchableOpacity>
        )
    }
}