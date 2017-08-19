import React from 'react';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import {LOGIN,REGISTER} from '../../constants/globals';

const Form = ({active}) => {
  if(active === LOGIN){
    return (
      <div className="row">
        <LoginForm />
      </div>
    );
  }else if(active === REGISTER){
    return (
      <div className="row">
        <RegisterForm />
      </div>
    );
  }
}

export default Form;
