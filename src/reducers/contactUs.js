import {GET_CONTACT_DETAIL} from "../constants/actionTypes";

export const INITIAL_STATE = {
    name:"",
    company:"",
    phone:"",
    email:"",
    state:"",
    details:"",
};

export default(state = INITIAL_STATE, action) => {

  switch(action.type) {
      case GET_CONTACT_DETAIL :
          return { 
              ...state,
              name: action.payload.name,
              company: action.payload.company,
              phone: action.payload.phone,
              email: action.payload.email,
              state: action.payload.state,
              details: action.payload.details,
          }
      default:
          return state;
  }

}



