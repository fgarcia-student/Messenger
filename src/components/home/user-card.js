import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GenericCard} from 'athenaeum';

class UserCard extends Component{

  render(){
    const names = this.getNames();
    const preview = this.getPreview();
    return(
      <GenericCard className="list-group-item user-card input-spacer">
        <div className="chat-id">{names}</div>
        <div className="prv-message">{preview.user || 'You'}: {preview.message}</div>
      </GenericCard>
    );
  }

  getNames(){
    const names = [];
    const {participants} = this.props.data;
    participants.forEach((participant) => {
      if(this.props.names[participant]) names.push(this.props.names[participant]);
    });
    return names.join(", ");
  }

  getPreview(){
    const {messages} = this.props.data;
    const lastMessage = messages[messages.length - 1];
    return {
      user: this.props.names[lastMessage.user],
      message: lastMessage.content
    }
  }
}

function mapStateToProps({user}) {
  return {names: user.friendData.friendsNames};
}

export default connect(mapStateToProps)(UserCard);
