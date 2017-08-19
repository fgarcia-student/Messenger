import axios from 'axios';
import {REGISTER_USER, LOGIN_USER} from '../constants/globals';

export function registerUser(values,cb){


  const user = axios.post('/register',values)
  .then((response) => {
    cb();
    return response.data
  })

  return {
    type: REGISTER_USER,
    payload: user
  }
}

export function loginUser(values,cb){


  const user = axios.post('/login',values)
  .then((response) => {
    cb();
    return response.data;
  });

  return{
    type: LOGIN_USER,
    payload: user
  }
}
