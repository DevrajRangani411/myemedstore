import {
  SENT_CLIENT_DATA,
  GET_CLIENT_DATA,
  SENT_RESOURCES_DATA,
  GET_RESOURCES_DATA,
  SENT_CHOOSE_DATA,
  GET_CHOOSE_DATA,
  SENT_APP_DATA,
  GET_APP_DATA,
  SENT_BENEFITS_DATA,
  GET_BENEFITS_DATA,
  SENT_FEATURE_LIST,
  GET_FEATURE_LIST
} from "../constants/actionTypes";

//*****Client*****/
export const sentClientData = () => ({
  type: SENT_CLIENT_DATA
});

export const getClientData = payload => ({
  type: GET_CLIENT_DATA,
  payload
});

//*****Resources*****/

export const sentResourceData = () => ({
  type: SENT_RESOURCES_DATA
});

export const getResourceData = payload => ({
  type: GET_RESOURCES_DATA,
  payload
});

export const sentAppData = () => ({
  type: SENT_APP_DATA
});

export const getAppData = payload => ({
  type: GET_APP_DATA,
  payload
});

export const setfeature = () => ({
  type: SENT_CHOOSE_DATA
});

export const getfeature = payload => ({
  type: GET_CHOOSE_DATA,
  payload
});

export const sentBenefitsData = () => ({
  type: SENT_BENEFITS_DATA
});

export const getBenefitsData = payload => ({
  type: GET_BENEFITS_DATA,
  payload
});

export const sentFeatureList = () => ({
  type: SENT_FEATURE_LIST
});

export const getFeatureList = payload => ({
  type: GET_FEATURE_LIST,
  payload
});