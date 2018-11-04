/**
 * Created by zerowolf on 2018/1/10.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import SizeUtil from './zero/utils/SizeUtil';
import OptionsUtil from './zero/utils/OptionsUtil';
import ButtonView from './zero/view/ButtonView';
import Icon from "react-native-vector-icons/Ionicons";

import MyTextInput from './zero/view/MyTextInput'
import Item from './GuideItem'
import TouchableItem from "./node_modules/react-navigation/lib/views/TouchableItem";

export default class Guide extends Component {
    static navigationOptions = ({navigation}) =>
        OptionsUtil.Options(navigation, 'md-arrow-back', 'md-more', '操作手册', () => {
                navigation.goBack();
            }, () => {

            }
        );

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#e4e5e7',
                flexDirection: 'column'
            }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                <Image style={{height: 260,width: SizeUtil.width, alignSelf: 'flex-start'}} resizeMode={'center'}
                       source={require('./zero/AImages/guide.png')}/>
                <View style={{flex: 1}}>
                   <Item title={'如何注册'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何推广'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何查询推广明细'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何查询订单明细'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何收银'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何商家收银'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何结算'} onPress={()=>{Alert.alert('111')}}/>
                   <Item title={'如何升级'} onPress={()=>{Alert.alert('111')}}/>
                </View>
                <View style={{height:40}}/>
            </ScrollView>
        );
    }
};
