import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigator } from './Navigator';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// const addListener = createReduxBoundAddListener("root");

const AppNavigator = ({dispatch, nav}) => {
    return <Navigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
};
  
const mapStateToProps = state => ({
        nav: state.RS_Nav,
});

export default connect(mapStateToProps)(AppNavigator);