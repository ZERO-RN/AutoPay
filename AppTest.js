/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, BackHandler
} from 'react-native';
import {
    NavigationActions,
    StackNavigator,
    TabNavigator,
    addNavigationHelpers,
} from 'react-navigation';

import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers,} from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './zero/reducers/AllReducers';
// import AppNavigator from './zero/navigator/AppNavigator';
import {Navigator} from './zero/navigator/Navigator';//StackNavigator

import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Sign'));
// const navReducer = (state = initialState, action) => {
//     const nextState = Navigator.router.getStateForAction(action, state);
//
//     // Simply return the original `state` if `nextState` is null or undefined.
//     return nextState || state;
// };


const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const AppNavigator = ({dispatch, nav}) => {
    console.log(nav);
    return <Navigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
};

const mapStateToProps = state => ({
    nav: state.RS_Nav,
});

const AppNavigator1 = connect(mapStateToProps)(AppNavigator);
const store = createStore(
    AllReducers,
    applyMiddleware(middleware),
);
export default class Root extends Component {
    // static navigationOptions = ({navigation, screenProps}) => ({
    //         headerTitle: '理财',
    //         header: null,
    //         headerBackTitle: null,
    //     }
    // );
    constructor(props) {
        super(props);
        console.log(this.props.navigation);
        console.log(this.props.dispatch);
        console.log(this.props.nav);
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
            console.log('return false');
            return false;
        }

        dispatch(NavigationActions.back());
        console.log('return true');
        return true;
    };

    render() {
        const {dispatch} = this.props;
        console.log(this.props.navigation);
        console.log(this.props.dispatch);
        console.log(this.props.nav);
        // const navigation = addNavigationHelpers({
        //     dispatch,
        //     state: this.props.nav,
        //     addListener,
        // });
        return (
            <Provider store={store}>
                {/*<AppNavigator1 navigation={addNavigationHelpers(navigation)}/>*/}
                <AppNavigator1 />
            </Provider>
        );
    }

}

