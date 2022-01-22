import {
    FETCHING_USER_ACCOUNT_REQUEST,
    FETCHING_USER_ACCOUNT_SUCCEEDED,
    FETCHING_USER_ACCOUNT_FAILED,
    FETCHING_USER_PROFILE,
    FETCHING_USER_PROFILE_SUCCEEDED,
    FETCHING_USER_PROFILE_FAILED,
    UPDATING_USER_PROFILE,
    ACCOUNT_BASE_URL,
    PROFILE_URL,
    UPDATING_USER_PROFILE_SUCCEEDED,
    UPDATING_USER_PROFILE_FAILED,
    UPDATE_PROFILE_URL

} from '../constants/actiontypes'
import axios from "axios";
import { createAction } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
/**
 * User Account
 */
 export const fetchUserAccount = createAction(FETCHING_USER_ACCOUNT_REQUEST);
 const fetchingUserAccountSuccedded = createAction(
   FETCHING_USER_ACCOUNT_SUCCEEDED
 );
 const fetchingUserAccountFailed = createAction(FETCHING_USER_ACCOUNT_FAILED);
 
 function* fetchUserAccountSaga() {
   const fetchUserAccountAPI = () => {
     return axios.get(ACCOUNT_BASE_URL).then((response) => response.data);
   };
 
   try {
     const response = yield call(fetchUserAccountAPI);
     yield put(fetchingUserAccountSuccedded(response));
   } catch (error) {
     yield put(fetchingUserAccountFailed(error));
   }
 }
 
 /**
  * User Profile
  */
 export const fetchUserProfile = createAction(FETCHING_USER_PROFILE);
 const fetchingUserProfileSuccedded = createAction(
   FETCHING_USER_PROFILE_SUCCEEDED
 );
 const fetchingUserProfileFailed = createAction(FETCHING_USER_PROFILE_FAILED);
 
 function* fetchUserProfileSaga() {
   const fetchUserProfileAPI = () => {
     return axios.get(PROFILE_URL).then((response) => response.data);
   };
 
   try {
     const response = yield call(fetchUserProfileAPI);
     yield put(fetchingUserProfileSuccedded(response));
   } catch (error) {
     yield put(fetchingUserProfileFailed(error));
   }
 }
 
 /**
  * update user profile
  */
 
 export const updateUserProfile = createAction(UPDATING_USER_PROFILE);
 const updatingUserProfileSuccedded = createAction(
   UPDATING_USER_PROFILE_SUCCEEDED
 );
 const updatingUserProfileFailed = createAction(UPDATING_USER_PROFILE_FAILED);
 
 function* updateUserProfileSaga(action) {
   const updateUserProfileAPI = () => {
     return axios
       .put(UPDATE_PROFILE_URL, action.payload)
       .then((response) => response.data);
   };
 
   try {
     const response = yield call(updateUserProfileAPI);
     yield put(updatingUserProfileSuccedded(response));
   } catch (error) {
     yield put(updatingUserProfileFailed(error));
   }
 }
 