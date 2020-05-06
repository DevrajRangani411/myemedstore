import { 
    GET_PORTFOLIO_DETAILS, 
    GET_PORTFOLIO_DETAILS_SUCCESS 
} from '../constants/actionTypes';

console.log("ACTION MY DATA : ");

export const getPortfolioDetails =() => ({
  type: GET_PORTFOLIO_DETAILS,
});

export const getPortfolioDetailsSuccess = payload => ({
  type: GET_PORTFOLIO_DETAILS_SUCCESS,
  payload
})  