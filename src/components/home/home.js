import React,{Component} from 'react';
import Title from '../common/title';
import {GenericCard} from 'athenaeum';
import {Link} from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props);
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

export default Home;
