import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';
import Title from '../common/title';
import {GenericCard} from 'athenaeum';


class Home extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchUserData();
  }

  render(){
    return(
      <div className="container">
        <Title title="#HOME"/>
          <div className="list-group">
            <GenericCard className="list-group-item">

            </GenericCard>
            <GenericCard className="list-group-item">

            </GenericCard>
            <GenericCard className="list-group-item">

            </GenericCard>
            <GenericCard className="list-group-item">

            </GenericCard>
          </div>
          <Link to="/logout">LogOut</Link>
      </div>
    );
  }
}

export default connect(null,actions)(Home);
