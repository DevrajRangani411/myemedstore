import * as actions from "../constants/actionTypes";

export const INITIAL_STATE = {
  blogList: null,
};
export default (state = INITIAL_STATE, action) => {
    //console.log("Reducer MY DATA : ",action.type);
  switch (action.type) {
      
    case actions.GET_BLOG_DETAILS_SUCCESS: {
      return { ...state, blogList: action.payload };
    }

    

    default:
      return state;
  }
};
