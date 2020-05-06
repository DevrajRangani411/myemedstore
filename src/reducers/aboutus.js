import * as actions from '../constants/actionTypes';
export const INITIAL_STATE = {
    AboutAction: null,
    Customer:null,
    Health:null,
};

export default (state = INITIAL_STATE, action) => {
    console.log("reducer : ", action.type);
    switch (action.type) {

        case actions.GET_PILLERS_SUSCESS: {
                return {...state,AboutAction: action.payload}
        }
        case actions.GET_CUSTOMER_SUSCESS: {
                return {...state,Customer: action.payload}
        }
        case actions.GET_HEALTHCARE_SUSCESS: {
                return {...state,Health: action.payload}
        }

        default:
            return state;
    }
};
