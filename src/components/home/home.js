import React,{Component} from 'react';
import Title from '../common/title';
import {GenericCard} from 'athenaeum';


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
        <div>
          <a><Icon icon="user"></Icon></a>
        </div>
      </div>
    );
  }
}

export default Home;
