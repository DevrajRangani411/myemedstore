import { GET_BLOG_DETAILS, GET_BLOG_DETAILS_SUCCESS } from "../constants/actionTypes";

console.log("ACTION MY DATA : ");

export const getBlogDetails =() => ({
  type: GET_BLOG_DETAILS,

});

export const getBlogDetailsSuccess = payload => ({
  type: GET_BLOG_DETAILS_SUCCESS,
  payload
})