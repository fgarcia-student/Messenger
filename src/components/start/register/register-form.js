import React, {Component} from 'react';
import {Animate,GenericCard,TextField,Button,Layout} from 'athenaeum';
import {helperValidateEmail,helperValidatePW,helperValidateCell} from '../../../constants/helpers';

class RegisterForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      nameErrMsg: '',
      nameErr: true,
      email: '',
      emailErrMsg: '',
      emailErr: true,
      verifyEmail: '',
      verifyEmailErrMsg: '',
      verifyEmailErr: true,
      pw: '',
      pwErrMsg: '',
      pwErr: true,
      verifyPw: '',
      verifyPwErrMsg: '',
      verifyPwErr: true,
      cellphone: '',
      cellphoneErrMsg: '',
      cellphoneErr: true
    }

    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(e){
    let {name,nameErrMsg,nameErr,
         email,emailErrMsg,emailErr,
         verifyEmail,verifyEmailErrMsg,verifyEmailErr,
         pw,pwErrMsg,pwErr,
         verifyPw,verifyPwErrMsg,verifyPwErr,
         cellphone,cellphoneErrMsg,cellphoneErr} = this.state;

    switch (e.target.id) {
      case 'NAME':{
        name = e.target.value;
        nameErr = true;
        if(name === ''){
          nameErrMsg = 'NAME CANNOT BE EMPTY';
        }else{
          nameErrMsg = '';
          nameErr = false;
        }
        break;
      }
      case 'EMAIL':{
        email = e.target.value.trim();
        emailErr = true;
        if(email === ''){
          emailErrMsg = 'EMAIL CANNOT BE EMPTY';
        }else if(!helperValidateEmail(email)){
          emailErrMsg = 'IMPROPER EMAIL FORMAT';
        }else{
          if(verifyEmail !== email){
            verifyEmailErrMsg = 'EMAILS DO NOT MATCH';
            verifyEmailErr = true;
          }else{
            verifyEmailErrMsg = '';
            verifyEmailErr = false;
          }
          emailErrMsg = '';
          emailErr = false;
        }
        break;
      }
      case 'EMAIL_VER':{
        verifyEmail = e.target.value.trim();
        verifyEmailErr = true;
        if(verifyEmail !== email){
          verifyEmailErrMsg = 'EMAILS DO NOT MATCH';
        }else{
          verifyEmailErrMsg = '';
          verifyEmailErr = false;
        }
        break;
      }
      case 'PW':{
        pw = e.target.value;
        pwErr = true;
        if(pw === ''){
          pwErrMsg = 'PASSWORD CANNOT BE EMPTY';
        }else if(!helperValidatePW(pw).lower){
          pwErrMsg = 'PASSWORD NEEDS AT LEAST 1 LOWER CASE LETTER';
        }else if(!helperValidatePW(pw).upper){
          pwErrMsg = 'PASSWORD NEEDS AT LEAST 1 UPPER CASE LETTER';
        }else if(!helperValidatePW(pw).digit){
          pwErrMsg = 'PASSWORD NEEDS AT LEAST 1 DIGIT';
        }else if(!helperValidatePW(pw).special){
          pwErrMsg = 'PASSWORD NEEDS AT LEAST 1 SPECIAL CHARACTER (!,@,#,$,%,^,&,*)';
        }else if(!helperValidatePW(pw).limit){
          pwErrMsg = 'PASSWORD NEEDS AT LEAST 10 CHARACTERS';
        }else{
          if(verifyPw !== pw){
            verifyPwErrMsg = 'PASSWORDS DO NOT MATCH';
            verifyPwErr = true;
          }else{
            verifyPwErrMsg = '';
            verifyPwErr = false;
          }
          pwErrMsg = '';
          pwErr = false;
        }
        break;
      }
      case 'PW_VER':{
        verifyPw = e.target.value;
        verifyPwErr = true;
        if(verifyPw !== pw){
          verifyPwErrMsg = 'PASSWORDS DO NOT MATCH';
        }else{
          verifyPwErrMsg = '';
          verifyPwErr = false;
        }
        break;
      }
      case 'CELL':{
        cellphone = e.target.value;
        cellphoneErr = true;
        if(cellphone === '___-___-____' || cellphone === ''){
          cellphoneErrMsg = 'CELLPHONE CANNOT BE EMPTY'
        }else if(!helperValidateCell(cellphone)){
          cellphoneErrMsg = 'CELLPHONE CANNOT BE INCOMPLETE'
        }else{
          cellphoneErrMsg = '';
          cellphoneErr = false;
        }
        break;
      }
      case 'FORM':{
        //if all other fields valid
        e.preventDefault();
        let formIsValid = (!nameErr && !emailErr && !verifyEmailErr && !pwErr && !verifyPwErr && !cellphoneErr ) ? true : false;
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

    this.setState({name,nameErrMsg,nameErr,
                   email,emailErrMsg,emailErr,
                   verifyEmail,verifyEmailErrMsg,verifyEmailErr,
                   pw,pwErrMsg,pwErr,
                   verifyPw,verifyPwErrMsg,verifyPwErr,
                   cellphone,cellphoneErrMsg,cellphoneErr});

  }

  render(){
    return(
      <div id="register-form" className="col-xs-12">
        <Animate animations="slideDown">
          <form id="FORM" onSubmit={this.validateForm}>
            <GenericCard variant="box">
              <Layout smallCols={[12]}>
                <TextField
                  id="NAME"
                  className="input-spacer"
                  label="FULL NAME"
                  placeholder="ME! Francisco Garcia"
                  input={{
                    value: this.state.name,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.nameErrMsg,
                    touched: this.state.nameErr
                  }}
                />
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
                  id="EMAIL_VER"
                  className="input-spacer"
                  label="VERIFY EMAIL"
                  placeholder="example@domain.com"
                  input={{
                    value: this.state.verifyEmail,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.verifyEmailErrMsg,
                    touched: this.state.verifyEmailErr
                  }}
                />
                <TextField
                  id="PW"
                  className="input-spacer"
                  label="PASSWORD"
                  placeholder="Be smart. Use a good password."
                  tooltip={()=>{alert(`Password must have:\nAt least 1 capital letter\nAt least 1 lowercase letter\nAt least 1 digit\nAt least 1 of the approved special characters[!@#$%^&*]\nAt least 10 characters`)}}
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
                <TextField
                  id="PW_VER"
                  className="input-spacer"
                  label="VERIFY PASSWORD"
                  placeholder="Be smart. Use a good password."
                  input={{
                    type: 'password',
                    value: this.state.verifyPw,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.verifyPwErrMsg,
                    touched: this.state.verifyPwErr
                  }}
                />
                <TextField
                  id="CELL"
                  className="input-spacer"
                  label="MOBILE PHONE NUMBER"
                  placeholder="999-999-9999"
                  mask="999-999-9999"
                  maskChar="_"
                  input={{
                    value: this.state.cellphone,
                    onChange: this.validateForm
                  }}
                  meta={{
                    error: this.state.cellphoneErrMsg,
                    touched: this.state.cellphoneErr
                  }}
                />
                <Button variant="action" type="submit">Register</Button>
              </Layout>
            </GenericCard>
          </form>
        </Animate>
      </div>
    );
  }
}

export default RegisterForm;
