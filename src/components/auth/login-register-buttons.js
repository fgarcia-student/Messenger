import React from 'react';
import {Button,Layout} from 'athenaeum';
import {LOGIN,REGISTER} from '../../constants/globals';

const LoginRegisterBtns = ({handleClick, active}) => {

  return (
    <div id="login-register-buttons">
      <Layout smallCols={[6]}>
        <Button
          onClick={handleClick}
          variant={active===LOGIN ? 'toggle-active' : 'toggle'}>
          LOGIN
        </Button>
        <Button
          onClick={handleClick}
          variant={active===REGISTER ? 'toggle-active' : 'toggle'}>
          REGISTER
        </Button>
      </Layout>
    </div>
  );
}

export default LoginRegisterBtns;
