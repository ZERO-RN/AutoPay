/**
 * Created by zerowolf on 2018/3/28.
 */
import React, {Component} from 'react';
import {
    BackHandler,Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');


import {
    NavigationActions,
    StackNavigator,
    TabNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import Bills from '../containers/bills/Bills';
import Wealth from '../containers/wealth/Wealth';
import AutoPay from '../containers/autopay/AutoPay';
import MyInvest from '../containers/myInvest/MyInvest';
import Mine from '../containers/mine/Mine';

import Icon from 'react-native-vector-icons/Ionicons'
const TabNavigation1 = TabNavigator({
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
export default
class TabNavigation extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '理财',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabNavigation1/>
        );
    }
}

