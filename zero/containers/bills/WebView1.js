/**
 *
 * Created by zerowolf on 2018/3/24.
 */

import React, {Component} from 'react';
import {
    ToastAndroid,Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions, WebView
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const {width, height} = Dimensions.get('window');
import MyTabView from '../../view/MyTabView';
import ParentClass from '../basic/ParentClass';


class WebView1 extends ParentClass {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '理财',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        console.log(this.props.navigation);
    }

    render() {
        var params = this.props;
        console.log(this.props.webViewURL);

        console.log(this.props.nav);
        console.log(this.props.navigation);

        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <MyTabView titleColor={'black'} title={'贝米实验室'} leftView={true} rightView={true}
                           navigation={this.props.navigation}/>
                <WebView bounces={false}
                         scalesPageToFit={true}
                         source={{uri:params.webViewURL?params.webViewURL:"https://www.baidu.com",method: 'GET'}}
                         style={{width:width, height:height}}>
                </WebView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.RS_Nav,
        webViewURL: state.RS_Nav.webViewURL,
    }

};


export default connect(mapStateToProps)(WebView1);
