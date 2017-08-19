import React, {Component} from 'react';
import {Animate,GenericCard,TextField,Button,Layout} from 'athenaeum';
import {helperValidateEmail,helperValidatePW,helperValidateCell} from '../../constants/helpers';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {registerUser} from '../../actions';

class RegisterForm extends Component{

  render(){
    const {handleSubmit} = this.props;

    return(
      <div id="register-form" className="col-xs-12">
        <Animate animations="slideDown">
          <form id="FORM" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <GenericCard variant="box">
              <Layout smallCols={[12]}>
                <Field
                  name="name"
                  label="FULL NAME"
                  placeholder="First and Last Name"
                  component={this.renderField}
                />
                <Field
                  name="email"
                  label="EMAIL"
                  placeholder="example@domain.com"
                  component={this.renderField}
                />
                <Field
                  name="verifyEmail"
                  label="VERIFY EMAIL"
                  placeholder="Match email input above"
                  component={this.renderField}
                />
                <Field
                  name="pw"
                  label="PASSWORD"
                  type="password"
                  placeholder="Follow password rules in tooltip"
                  tooltip={()=>{alert(`Password must have:\nAt least 1 capital letter\nAt least 1 lowercase letter\nAt least 1 digit\nAt least 1 of the approved special characters[!@#$%^&*]\nAt least 10 characters`)}}
                  component={this.renderField}
                />
                <Field
                  name="verifyPw"
                  label="VERIFY PASSWORD"
                  type="password"
                  placeholder="Match password input above"
                  component={this.renderField}
                />
                <Field
                  name="cellphone"
                  label="MOBILE PHONE NUMBER"
                  placeholder="999-999-9999"
                  mask="999-999-9999"
                  maskChar="_"
                  component={this.renderField}
                />
                <Button variant="action" type="submit">Register</Button>
              </Layout>
            </GenericCard>
          </form>
        </Animate>
      </div>
    );
  }

  renderField(field){
     const {meta : {error, touched}} = field;

     return(
       <TextField
         className="input-spacer"
         label={field.label}
         placeholder={field.placeholder || ""}
         tooltip={field.tooltip || null}
         mask={field.mask || ""}
         maskChar={field.maskChar || ""}
         input={{...field.input, type:field.type || "text"}}
         meta={{error,touched}}
       />
     );
  }

  onSubmit(values){
    console.log(values);
  }
}

function  validate(values){
    const errors = {};
    //form validation
    if(!values.name) errors.name = "NAME CANNOT BE EMPTY";

    if(!values.email) errors.email = "EMAIL CANNOT BE EMPTY";
    else if(!helperValidateEmail(values.email)) errors.email = "IMPROPER EMAIL FORMAT";

    if(!values.verifyEmail) errors.verifyEmail = "FIELD CANNOT BE EMPTY";
    else if(values.verifyEmail !== values.email) errors.verifyEmail = "EMAILS DO NOT MATCH";

    if(!values.pw) errors.pw = "PASSWORD CANNOT BE EMPTY";
    else if(!helperValidatePW(values.pw).lower) errors.pw = "PASSWORD NEEDS AT LEAST 1 LOWERCASE LETTER";
    else if(!helperValidatePW(values.pw).upper) errors.pw = "PASSWORD NEEDS AT LEAST 1 UPPERCASE LETTER";
    else if(!helperValidatePW(values.pw).digit) errors.pw = "PASSWORD NEEDS AT LEAST 1 DIGIT";
    else if(!helperValidatePW(values.pw).special) errors.pw = "PASSWORD NEEDS AT LEAST 1 SPECIAL CHARACTER (!,@,#,$,%,^,&,*)";
    else if(!helperValidatePW(values.pw).limit) errors.pw = "PASSWORD NEEDS AT LEAST 10 CHARACTERS";

    if(!values.verifyPw) errors.verifyPw = "FIELD CANNOT BE EMPTY";
    else if(values.verifyPw !== values.pw) errors.verifyPw = "PASSWORDS DO NOT MATCH"

    if(!values.cellphone || values.cellphone === "___-___-____") errors.cellphone = "CELLPHONE CANNOT BE EMPTY";
    else if(!helperValidateCell(values.cellphone)) errors.cellphone = "CELLPHONE CANNOT BE INCOMPLETE";

    return errors;
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default reduxForm({
  validate,
  form: 'RegistrationForm'
})(
  connect(mapStateToProps,{registerUser})(RegisterForm)
);
