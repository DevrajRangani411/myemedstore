import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../constants/actionTypes';
import * as portfolioActions from '../actions';


function* getPortfolioList() {
   
  try {
      
  
    const response = yield import("../assets/json/portfolio.json");
    
 
    
       yield put(portfolioActions.getPortfolioDetailsSuccess(response.default));
   
  } catch (error) {
    console.log("TCL: function*getPortfolioList -> error", error);
  }
}

export default function* rootsaga() {
    yield takeEvery(actions.GET_PORTFOLIO_DETAILS, getPortfolioList);  
}