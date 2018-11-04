/**
 * Created by zerowolf on 2018/3/28.
 */
import React, {Component} from 'react';
import {
    BackHandler,Platform,StyleSheet,Text,Alert,View,TouchableOpacity, Image,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {TabNavigator, StackNavigator,  NavigationActions,   addNavigationHelpers} from 'react-navigation';
import {Navigator} from './zero/navigator/Navigator'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export default class ReduxNavigation extends Component{
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { dispatch, nav } = this.props;
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav,
            // addListener,
        });
        //navigation={navigation}
        return <Navigator />;
    }
    constructor(props){
        super(props);

    }

}
const mapStateToProps = state => ({
    nav: state.RS_Nav,
});

export default connect(mapStateToProps)(ReduxNavigation);

