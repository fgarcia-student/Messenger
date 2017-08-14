import React,{Component} from 'react';
import {Animate,GenericCard,TextField,Button,Layout} from 'athenaeum';
import {helperValidateEmail,helperValidatePW} from '../../../constants/helpers';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {loginUser} from '../../../actions';

class LoginForm extends Component {

  render(){
    const {handleSubmit} = this.props;

    return (
      <div id="login-form" className="col-xs-12">
        <Animate animations="slideDown">
          <form id="FORM" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <GenericCard variant="box">
              <Layout smallCols={[12]}>
                <Field
                  name="email"
                  label="EMAIL"
                  placeholder="example@domain.com"
                  component={this.renderField}
                />
                <Field
                  name="pw"
                  label="PASSWORD"
                  type="password"
                  placeholder="10 character minimum"
                  component={this.renderField}
                />
                <Button variant="action" type="submit">Login</Button>
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
    this.props.loginUser(values);
    console.log(this.props.user);
  }
}

function validate(values) {
  const errors = {};

  if(!values.email) errors.email = "EMAIL CANNOT BE EMPTY";
  else if(!helperValidateEmail(values.email)) errors.email = "IMPROPER EMAIL FORMAT";

  if(!values.pw) errors.pw = "PASSWORD CANNOT BE EMPTY";
  else if(!helperValidatePW(values.pw).limit) errors.pw = "PASSWORD NEEDS AT LEAST 10 CHARACTERS";

  return errors;
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps,{loginUser})(LoginForm)
);
