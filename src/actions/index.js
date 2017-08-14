import {REGISTER_USER, LOGIN_USER} from '../constants/globals';

export function registerUser(values/*, cb (will use when routing)*/){
  let user = {id: "123"};
  return {
    type: REGISTER_USER,
    payload: user
  }
}

export function loginUser(values){
  let user = {id: "123"};
  return{
    type: LOGIN_USER,
    payload: user
  }
}
