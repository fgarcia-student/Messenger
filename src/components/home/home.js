import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as actions from '../../actions';
import Title from '../common/title';
import UserCard from './user-card';

class Home extends Component {

  componentWillMount(){
    this.props.fetchUserData();
  }

  renderFriends(){
    const data = this.props.friendData;
    const convos = [];
    if(data){
      data.conversations.forEach((chat,index) => {
        convos.push(<UserCard data={chat} key={chat._id} />);
      });
    }
    return convos;
  }

  render(){
    return(
      <div className="container">
        <Title title="#HOME"/>
          <div className="list-group">
            {this.renderFriends()}
          </div>
        <Link to="/logout">LogOut</Link>
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {friendData: user.friendData};
}

export default connect(mapStateToProps,actions)(withRouter(Home));
