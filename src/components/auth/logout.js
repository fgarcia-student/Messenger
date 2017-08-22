import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

class Logout extends Component {
  constructor(props){
    super(props);
    this.timeOut = null;
  }

  componentDidMount(){
    this.props.logoutUser();
    this.timeOut = setTimeout(()=>{this.props.history.push('/')},300);
  }

  componentWillUnmount(){
    clearTimeout(this.timeOut);
  }

  render(){
    return(
      <div>
        Goodbye!
      </div>
    );
  }
}

export default connect(null,actions)(withRouter(Logout));
