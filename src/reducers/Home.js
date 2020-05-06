import {
  GET_CLIENT_DATA,
  GET_RESOURCES_DATA,
  GET_APP_DATA,
  GET_CHOOSE_DATA,
  GET_BENEFITS_DATA,
  GET_FEATURE_LIST
} from "../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLIENT_DATA:
      console.log("reducer", action);
      return {
        ...state,
        data: action.payload
      };
    case GET_RESOURCES_DATA:
      return {
        ...state,
        resources: action.payload
      };

    case GET_APP_DATA:
      console.log("reducer", action);
      return {
        ...state,
        appdata: action.payload
      };
    case GET_CHOOSE_DATA:
      console.log("reducer", action);
      return {
        ...state,
        single: action.payload
      };
    case GET_BENEFITS_DATA:
      console.log("reducer", action);
      return {
        ...state,
        benefits: action.payload
      };
    case GET_FEATURE_LIST:
      console.log("reducer", action);
      return {
        ...state,
        feature: action.payload
      };
    default:
      return state;
  }
};
