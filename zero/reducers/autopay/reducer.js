/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';

export const autopay = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_AUTOPAY:
            return Object.assign(
                {},
                state,
                {data: !action.data}
            );
        default:
            return state;
    }
};
export const pay_manage = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_PAY_MANAGE:
            return Object.assign(
                {},
                state,
                {data: !action.bool}
            );
        default:
            return state;
    }
};
export const pay_navigator = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_PAY_NAVIGATOR:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};