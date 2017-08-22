import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Title from '../common/title';
import LoginRegisterBtns from './login-register-buttons';
import Form from './form-container';
import {LOGIN,REGISTER} from '../../constants/globals';

class Start extends Component {
  constructor(props){
    super(props);
    this.state = {clicked: null};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    if(this.props.authenticated) this.props.history.push('/home');
    else this.setState({clicked: LOGIN});
  }

  handleClick(e){
    if(e.target.innerText === LOGIN){
      this.setState({clicked: LOGIN});
    }else{
      this.setState({clicked: REGISTER});
    }
  }

  render(){
    return (
      <div className="container">
        <Title title="#MESSENGER"/>
        <LoginRegisterBtns handleClick={this.handleClick} active={this.state.clicked} />
        <Form active={this.state.clicked}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authenticated.authenticated};
}

export default connect(mapStateToProps)(withRouter(Start));
