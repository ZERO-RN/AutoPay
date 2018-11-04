/**
 * Created by zerowolf on 2017/12/6.
 */

import {combineReducers} from 'redux';
import {autopay,pay_manage,pay_navigator} from './autopay/reducer';
import {mine} from './mine/reducer';
import {bills} from './bills/reducer';
import {wealth} from './wealth/reducer';
import {splash} from './splash/reducer';
import {nav} from './navigators/index';
import {new_dataTest,state_dataTest} from '../actions/NewAction';



import {Navigator} from './../navigator/Navigator';//StackNavigator

// const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Splash'));
//
// const navReducer = (state = initialState, action) => {
//     const nextState = Navigator.router.getStateForAction(action, state);
//
//     // Simply return the original `state` if `nextState` is null or undefined.
//     return nextState || state;
// };

import {inquiry_data} from '../containers/inquiry/reducer/Reducer';


export default AllReducers = combineReducers({
    // nav: navReducer,
    RS_Inquiry:inquiry_data,
    RS_NEW :new_dataTest,
    RS_State :state_dataTest,
    RS_Nav:nav,
    RS_AutoPay : autopay,
    RS_Pay_Manage : pay_manage,
    RS_Navigate: pay_navigator,
    RS_Mine : mine,
    RS_Bills : bills,
    RS_Wealth : wealth,
    RS_Splash : splash,
});