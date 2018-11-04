import {NavigationActions} from 'react-navigation';
import {AppNavigator, Navigator} from '../../navigator/Navigator';

export const nav = (state, action) => {
    switch (action.type) {
        case 'Pay_Manage':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Manage'}),
                {...state, data: action.data}
            );
        case 'Bills_One':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Bills_One'}),
                {...state, data: action.data}
            );
        case 'Pay_Plan':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Plan'}),
                {...state, data: action.data}
            );
        case 'Pay_Plan_AddCard':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Plan_AddCard'}),
                {...state, data: action.data}
            );
        case 'Pay_New_Plan':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_New_Plan'}),
                {...state, data: action.data}
            );
        case 'Pay_Query':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Query'}),
                {...state, data: action.data}
            );
        case 'Pay_Manager':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Manager'}),
                {...state, data: action.data}
            );
        case 'Pay_Upgrade':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Upgrade'}),
                {...state, data: action.data}
            );

        case 'Pay_Step':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Pay_Step'}),
                {...state, data: action.data}
            );

        //Mine
        case 'ShiMing':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'ShiMing'}),
                {...state, data: action.data}
            );
        case 'DingDan':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'DingDan'}),
                {...state, data: action.data}
            );
        case 'Splash':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Splash'}),
                {...state, data: action.data}
            );
 case 'Set_account':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Set_account'}),
                {...state, data: action.data}
            );
 case 'WebView1':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'WebView1'}),
                {...state, webViewURL: action.webViewURL}
            );
 case 'RedPlan':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'RedPlan'}),
                {...state, RedPlanData: action.RedPlanData}
            );
 case 'HelpNews':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'HelpNews'}),
                {...state, data: action.data}
            );

        default:
            return Navigator.router.getStateForAction(action, state) || state;
    }
}
