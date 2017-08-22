import axios from 'axios';
import Promise from 'bluebird';
import {AUTH_USER,UNAUTH_USER,AUTH_ERROR} from '../constants/globals';

const API_URL = 'http://localhost:3001';

export function registerUser(values){

}

export function loginUser(values, history){
  return function(dispatch) {
    Promise.resolve(axios.post(`${API_URL}/login`,values))
    .then((response) => {
      //if req is good...
      // - Update state to indicate user is authenticated
      dispatch({type: AUTH_USER});
      // - Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - Redirect to route '/home'
      history.push('/home');
    })
    .catch((error) => {
      //if req is bad...
      // - Show error to the user
      dispatch(authError('Bad Login Information'));
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function logoutUser() {
  localStorage.removeItem('token');
  return {type: UNAUTH_USER}
}
