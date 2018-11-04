/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';

export const wealth = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_WEALTH:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};