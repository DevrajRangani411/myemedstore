import * as action from '../constants/actionTypes';

export const get_pillers = paylod => {
    console.log("In action creator")
    return {
        type: action.GET_PILLERS,
    };
};
export const get_piller_success = paylod => {
    return {
        type: action.GET_PILLERS_SUSCESS,
        payload: paylod
    };
};


export const get_customer = paylod => {
    console.log("In action creator customer")
    return {
        type: action.GET_CUSTOMER,
    };
};
export const get_customer_success = paylod => {
    return {
        type: action.GET_CUSTOMER_SUSCESS,
        payload: paylod
    };
};


export const get_healthcare = paylod => {
    console.log("In action creator customer")
    return {
        type: action.GET_HEALTHCARE,
    };
};
export const get_healthcare_success = paylod => {
    return {
        type: action.GET_HEALTHCARE_SUSCESS,
        payload: paylod
    };
};