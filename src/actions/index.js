import axios from 'axios';
import {REGISTER_USER, LOGIN_USER} from '../constants/globals';

export function registerUser(values,cb){


  const user = axios.post('/register',values);
  //look into axios yelling user is undefined when .then is called on post
  //.then(()=>{cb()})

  return {
    type: REGISTER_USER,
    payload: user
  }
}

export function loginUser(values,cb){


  const user = axios.post('/login',values);
  //look into axios yelling user is undefined when .then is called on post
  //.then(()=>{cb()})

  return{
    type: LOGIN_USER,
    payload: user
  }
}
