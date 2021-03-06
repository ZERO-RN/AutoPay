/**
 * Created by zerowolf on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    BackHandler,Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';

import {connect} from 'react-redux';
import {
    NavigationActions,
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import {bindActionCreators} from 'redux';
import MyTabView from '../../view/MyTabView';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';

export default class ParentClass extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '分红计划',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        console.log('父类');

    }

    componentDidMount() {
        console.log('已经完成');
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        console.log('将要完成');
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        console.log(this.props.navigation);
        console.log(this.props.dispatch);
        console.log(this.props.nav);
        console.log('退出');

        const {dispatch, nav} = this.props;
        if (nav.index === 0) {
            return false;
        }


        dispatch(NavigationActions.back());
        return true;
    };


}

