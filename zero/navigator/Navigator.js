/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image, BackHandler
} from 'react-native';
import {TabNavigator, StackNavigator, NavigationActions, addNavigationHelpers} from 'react-navigation';
// import {Provider} from '../actions/alltype';
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
import ParentClass from '../containers/basic/ParentClass';
import HelpNews from '../containers/bills/help/HelpNews';


import Set_account from '../containers/mine/account/Set_account';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import ReduxNavigation from './ReduxNavigation';

import  Inquiry from '../containers/inquiry/Inquiry';//询价

//
// class ReduxNavigation extends Component {
//     static navigationOptions = ({navigation, screenProps}) => ({
//             headerTitle: '理财',
//             header: null,
//             headerBackTitle: null,
//         }
//     );
//     componentDidMount() {
//         BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
//     }
//     componentWillUnmount() {
//         BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
//     }
//     onBackPress = () => {
//         const { dispatch, nav } = this.props;
//         if (nav.index === 0) {
//             return false;
//         }
//         dispatch(NavigationActions.back());
//         return true;
//     };
//
//     render() {
//         const { dispatch, nav } = this.props;
//         const navigation = addNavigationHelpers({
//             dispatch,
//             state: nav,
//             // addListener,
//         });
//         //navigation={navigation}
//         return <AppNavigator  />;
//     }
// }
//StackNavigator
// import TabNavigation from '../../AppTest';
// import TabNavigation from './TabNavigation';

const TabNavigation = TabNavigator({
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

import FuzzyQuery from '../containers/inquiry/FuzzyQuery';
import DropDown from '../containers/inquiry/item/DropDown';
export const Navigator = StackNavigator(
    {

        // DropDown: {screen: DropDown},
        // Inquiry: {screen: Inquiry},


        // FuzzyQuery: {screen: FuzzyQuery},


        // RedPlan: {screen: RedPlan},

        // Tab: {screen: ReduxNavigation},
        Tab: {screen: TabNavigation},
        ParentClass: {screen: ParentClass},
        Sign: {screen: SignPage},
        Splash: {screen: Splash},
        // Wealth: {screen: Wealth},
        Wealth: {screen: TabNavigation, path: 'Wealth'},
        Bills_One: {screen: Bills_One},


        Pay_Plan: {screen: Pay_Plan},
        Pay_Plan_AddCard: {screen: Pay_Plan_AddCard},
        Pay_New_Plan: {screen: Pay_New_Plan},
        Pay_Query: {screen: Pay_Query},
        Pay_Manage: {screen: Pay_Manage},
        Pay_Upgrade: {screen: Pay_Upgrade},
        Pay_Step: {screen: Pay_Step},

        //Mine
        ShiMing: {screen: ShiMing},
        DingDan: {screen: DingDan},

        Set_account: {screen: Set_account},
        WebView1: {screen: WebView1},
        RedPlan: {screen: RedPlan},
        HelpNews: {screen: HelpNews},
    },
    // {
    //     navigationOptions: {
    //         headerTintColor: 'white',
    //         showIcon: true,
    //         swipeEnabled: false,
    //         animationEnabled: false,
    //         initialRouteName: 'Tab'
    //     },
    //     mode: 'modal',
    //
    //
    // }
);
