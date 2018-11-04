/**
 * Created by zerowolf on 2018/3/23.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../view/MyTabView';

import Icon from 'react-native-vector-icons/Entypo'
import Item from './item/Item';
import NavigationUtil1 from '../../utils/NavigationUtil1';
import SizeUtil from '../../utils/SizeUtil';
import LinearGradient from 'react-native-linear-gradient';
export default class Navigator extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '理财',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        this.state = {
            eyeIsOpen: true,
            hideNumber: false
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} color1={'white'} color2={'white'} title={'我的投资'}
                           hasRight={true}
                           rightView={
                               <TouchableOpacity activeOpacity={0.5}
                                                 style={{
                                                     width: width / 3,
                                                     justifyContent: 'center',
                                                     alignItems: 'flex-end',
                                                     paddingRight: 15
                                                 }}
                                                 onPress={() => {
                                                     console.log('jasad');
                                                     this.setState({
                                                         eyeIsOpen: !this.state.eyeIsOpen,
                                                         hideNumber: !this.state.hideNumber
                                                     });
                                                 }}>
                                   <Icon size={20} name={this.state.eyeIsOpen ? 'eye' : 'eye-with-line'}
                                         style={{color: 'black', backgroundColor: 'transparent'}}/>

                               </TouchableOpacity>
                           }
                           navigation={this.props.navigation}/>

                <Item hideNumber = {this.state.hideNumber}/>


                <Image style={{resizeMode: 'center', width: 200, height: 160, marginTop: 40}}
                       source={require('../../AImages/small/noInvest.png')}/>
                <Text style={{fontSize: 12, color: 'grey'}}>目前还没有投资</Text>

                <TouchableOpacity activeOpacity={0.5}
                                  style={{
                                      width: 120,
                                      height: 30,
                                      marginTop: 30,
                                      borderWidth: 1,
                                      borderRadius: 15,
                                      borderColor: 'red',
                                      justifyContent: 'center',
                                      alignItems: 'center'

                                  }}
                                  onPress={() => {
                                        NavigationUtil1.reset(this.props.navigation,'Wealth')
                                  }}>

                    <Text style={{color: 'red', fontSize: 13}}>去投资</Text>
                </TouchableOpacity>
            </View>
        );
    }
}