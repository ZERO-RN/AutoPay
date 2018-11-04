/**
 * Created by zerowolf on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class Item extends Component{
    constructor(props){
        super(props);

    }

    render(){
        var  params = this.props;

       return (
           <View style={{width: width - 20, height: 200,}}>

               <Image style={{

                   width: width - 20,
                   height: 200,
                   resizeMode: 'stretch',
                   backgroundColor: 'transparent',
                   position: 'absolute'
               }}
                      source={require('../../../AImages/small/Invest.png')}>
               </Image>
               <Text style={{
                   left: 40,
                   top: 40,
                   backgroundColor: 'transparent',
                   color: 'white',
                   fontSize: 13
               }}>昨日收益</Text>
               <Text style={{
                   left: 40,
                   top: 45,
                   backgroundColor: 'transparent',
                   color: 'white',
                   fontWeight: 'bold',
                   fontSize: 30
               }}>{params.hideNumber ? '***' : '0.00'}</Text>


               <View style={{
                   left: 40,
                   top: 60,
                   width: width,
                   flexDirection: 'row',
                   justifyContent: 'space-around',
                   alignItems: 'center'
               }}>

                   <View style={{flex: 1}}>
                       <Text style={{
                           backgroundColor: 'transparent',
                           color: 'white',
                           fontSize: 13
                       }}>总资产</Text>

                       <Text style={{
                           backgroundColor: 'transparent',
                           color: 'white',
                           fontWeight: 'bold',
                           fontSize: 18
                       }}>{params.hideNumber ? '****' : '0.00'}</Text>
                   </View>

                   <View style={{flex: 1}}>
                       <Text style={{
                           backgroundColor: 'transparent',
                           color: 'white',
                           fontSize: 13
                       }}>累计收益</Text>
                       <Text style={{
                           backgroundColor: 'transparent',
                           color: 'white',
                           fontWeight: 'bold',
                           fontSize: 18
                       }}>{params.hideNumber ? '****' : '0.00'}</Text>
                   </View>
               </View>
           </View>
        )
    }
}