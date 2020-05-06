import { all, takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../constants/actionTypes";


function* getContactDetail(actions) {
  
    
  try {
    localStorage.setItem('contactData', JSON.stringify(actions.payload));
  } catch (error) {
    console.log("TCL: function*getContactDetail -> error", error);

  }
}

export default function* rootsaga() {
    yield takeEvery(actions.GET_CONTACT_DETAIL, getContactDetail);  
  }