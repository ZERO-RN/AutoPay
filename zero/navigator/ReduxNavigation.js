/**
 *
 * Created by zerowolf on 2018/3/27.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

import {BackHandler} from "react-native";
import {addNavigationHelpers, NavigationActions} from "react-navigation";

import {TabNavigator, StackNavigator} from 'react-navigation';


import Bills from '../containers/bills/Bills';
import Wealth from '../containers/wealth/Wealth';
import AutoPay from '../containers/autopay/AutoPay';
import MyInvest from '../containers/myInvest/MyInvest';
import Mine from '../containers/mine/Mine';
import ShiMing from '../containers/mine/ShiMing';
import DingDan from '../containers/mine/DingDan';
import Pay_Manage from '../containers/autopay/manage/Pay_Manage';
import Bills_One from '../containers/bills/Bills_One';
import Splash from '../containers/splash/Splash';
import Pay_Plan from '../containers/autopay/Pay_Plan';
import Pay_Plan_AddCard from '../containers/autopay/Pay_Plan_AddCard';
import Pay_New_Plan from '../containers/autopay/Pay_New_Plan';
import Pay_Step from '../containers/autopay/Pay_Step';
import Pay_Upgrade from '../containers/autopay/upgrade/Pay_Upgrade';
import Pay_Query from '../containers/autopay/Pay_Query';
import SignPage from '../component/signPage/SignPage';
import WebView1 from '../containers/bills/WebView1';
import RedPlan from '../containers/wealth/redPlan/RedPlan';
import HelpNews from '../containers/bills/help/HelpNews';

import Icon from 'react-native-vector-icons/Ionicons'
export const AppNavigation = TabNavigator({
    Bills: {
        screen: Bills, navigationOptions: {
            tabBarLabel: '钱包',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-home-outline" size={18} color={tintColor}/>
            )
        }
    },
    Wealth: {
        screen: Wealth, navigationOptions: {
            tabBarLabel: '理财',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-appstore" size={18} color={tintColor}/>

            )
        }
    },
    /*AutoPay: {
     screen: AutoPay, navigationOptions: {
     tabBarLabel: '还款',
     tabBarIcon: ({tintColor, focused}) => (
     <Icon name="ios-disc-outline" size={18} color={tintColor}/>

     )
     }
     },*/
    MyInvest: {
        screen: MyInvest, navigationOptions: {
            tabBarLabel: '我的投资',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-disc-outline" size={18} color={tintColor}/>

            )
        }
    },
    Mine: {
        screen: Mine, navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="md-person" size={18} color={tintColor}/>

            )
        },
    }
}, {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载,
    swipeEnabled: true,
    animationEnabled: false,
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Bills',
    tabBarOptions: {
        showIcon: true,
        pressOpacity: 0.8,
        activeTintColor: '#e64747', // 文字和图片选中颜色
        inactiveTintColor: '#707070', // 文字和图片默认颜色
        style: {
            height: 45,
            backgroundColor: 'white',
            zIndex: 0,
            position: 'relative'
        },

        labelStyle: {
            fontSize: 12,
            paddingVertical: 0,
            marginTop: Platform.OS === 'android' ? 0 : 12
        },

        iconStyle: {
            marginTop: -3
        },
        tabStyle: {
            // backgroundColor: 'rgb(230,69,51)',
            backgroundColor: 'white',
        },
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
    }
});
import {addListener} from '../../AppTest';
export default class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);


    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {dispatch, nav} = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
        });

        return <AppNavigation navigation={navigation}/>;
    }
}