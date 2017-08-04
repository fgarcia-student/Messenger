import React from 'react';
import LoginForm from './login/login-form';
import RegisterForm from './register/register-form';
import {LOGIN,REGISTER} from '../../constants/globals';

const Form = ({active}) => {
  if(active === LOGIN){
    return <LoginForm />
  }else if(active === REGISTER){
    return <RegisterForm />
  }
}

export default Form;
