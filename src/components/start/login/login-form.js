import React,{Component} from 'react';
import {Animate,GenericCard,TextField,Button,Layout} from 'athenaeum';
import {helperValidateEmail,helperValidatePW} from '../../../constants/helpers';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      pw: '',
      emailErrMsg: '',
      pwErrMsg: '',
      emailErr: true,
      pwErr: true
    };

    this.validateForm = this.validateForm.bind(this);
  }

  // start event handlers

  validateForm(e){
    let {email,pw,emailErrMsg,emailErr,pwErrMsg,pwErr} = this.state;

    switch (e.target.id){
      case 'EMAIL':{
        //if email string is empty
        email = e.target.value.trim();
        emailErr = true;
        if(email === ''){
          emailErrMsg = 'EMAIL CANNOT BE EMPTY';
        }else if(!helperValidateEmail(email)){
          //if email doesnt adhere to standard email pattern
          emailErrMsg = 'IMPROPER EMAIL FORMAT';
        }else{
          //no error
          emailErrMsg = '';
          emailErr = false;
        }
        break;
      }
      case 'PW':{
        //min password length is 8
        pw = e.target.value;
        pwErr = true;
        if(pw === ''){
          pwErrMsg = 'PASSWORD CANNOT BE EMPTY';
        }else if(!helperValidatePW(pw).limit){
          pwErrMsg = 'PASSWORD MUST BE AT LEAST 10 CHARACTERS';
        }else{
          //no error
          pwErrMsg = '';
          pwErr = false;
        }
        break;
      }
      case 'FORM':{
        //if all other fields valid
        e.preventDefault();
        let formIsValid = (!emailErr && !pwErr) ? true : false;
        if(formIsValid){
          //submit form
          console.log('valid form');
        }else{
          //display error message
          console.log('invalid form');

        }
        break;
      }
      default:

    }
    //update state
    this.setState({email,pw,emailErrMsg,emailErr,pwErrMsg,pwErr});
  }

  // end event handlers

  render(){
    return (
      <div id="login-form" className="col-xs-12">
        <Animate animations="slideDown">
          <form id="FORM" onSubmit={this.validateForm}>
            <GenericCard variant="box">
              <Layout smallCols={[12]}>
                <TextField
                  id="EMAIL"
                  className="input-spacer"
                  label="EMAIL"
                  placeholder="example@domain.com"
                  input={{
                    value: this.state.email,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.emailErrMsg,
                    touched: this.state.emailErr
                  }}
                />
                <TextField
                  id="PW"
                  className="input-spacer"
                  label="PASSWORD"
                  placeholder="Password"
                  input={{
                    type: 'password',
                    value: this.state.pw,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.pwErrMsg,
                    touched: this.state.pwErr
                  }}
                />
                <Button variant="action" type="submit">Login</Button>
              </Layout>
            </GenericCard>
          </form>
        </Animate>
      </div>
    );
  }
}

export default LoginForm;
