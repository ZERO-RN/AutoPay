/**
 * Created by zerowolf on 2018/3/26.
 */
export const NEW_ACTION = "new_action";
export const NEW_NAV = "new_nav";

export const New_Action = (a, b, c, d, e) => {
    return {
        type: NEW_ACTION,
        payload: {aaa: a, bbb: b, ccc: c, ddd: d, eee: e}
    };
};
export const New_Nav = (data) => {
    return {
        type: NEW_NAV,
        data
    };
};
export const State_Action = (data) => {
    return {
        type: STATE_ACTION,
        data
    };
};

export const new_dataTest = (state = {}, action) => {
    switch (action.type) {
        case NEW_ACTION:
            return Object.assign(
                {},
                state,
                {payload: action.payload}
            );
        case NEW_NAV:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );

        default:
            return state;

    }
};

export const STATE_ACTION = "state_action";




export const state_dataTest = (state = {}, action) => {
    switch (action.type) {
        case STATE_ACTION:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};