import React, {Component} from 'react';
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
    this.setState({clicked: LOGIN});
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
      <div>
        <Title title="#Messenger"/>
        <LoginRegisterBtns handleClick={this.handleClick} active={this.state.clicked} />
        <Form active={this.state.clicked}/>
      </div>
    );
  }
}

export default Start;
