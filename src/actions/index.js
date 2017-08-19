import axios from 'axios';
import {REGISTER_USER, LOGIN_USER} from '../constants/globals';

const API_URL = 'http://localhost:3001';

export function registerUser(values){

}

export function loginUser({email, password}){
  //if req is good...
  // - Update state to indicate user is authenticated
  // - Save the JWT token
  // - Redirect to route '/home'

  //if req is bad...
  // - Show error to the user

  return function(dispatch) {
    axios.post(`${API_URL}/login`,{email, password})
  }
}
