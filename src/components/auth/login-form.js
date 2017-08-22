import React,{Component} from 'react';
import {Animate,GenericCard,TextField,Button,Layout} from 'athenaeum';
import {helperValidateEmail,helperValidatePW} from '../../constants/helpers';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  render(){
    const {handleSubmit} = this.props;

    return (
      <div id="login-form" className="col-xs-12">
        <Animate animations="slideDown">
          <form id="FORM" onSubmit={handleSubmit(this.onSubmit)}>
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
                {this.renderError()}
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

  renderError(){
    if(this.props.errorMsg){
      return (
        <div className="alert alert-danger">
          <strong>{this.props.errorMsg}</strong>
        </div>
      );
    }
  }

  onSubmit(values){
    this.props.loginUser(values, this.props.history);
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
  return {errorMsg: state.authenticated.error};
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps,actions)(withRouter(LoginForm))
);
