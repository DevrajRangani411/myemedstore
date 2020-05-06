import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
    portfolioList: null,
};

export default (state = INITIAL_STATE, action) => {
    console.log("Reducer MY DATA : ",action.type);
    switch (action.type) {
        
    case actions.GET_PORTFOLIO_DETAILS_SUCCESS: {
        return { ...state, portfolioList: action.payload };
    }
  
      // case actions.GET_INVENTORY_DETAILS:{
      //   return{...state,inventoryList:null}
      // }
  
      default:
        return state;
    }
};
