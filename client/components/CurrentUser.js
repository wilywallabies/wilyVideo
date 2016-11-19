import React from 'react';
import CurrentUserInfoContainer from '../containers/currentUserInfoContainer';

class  CurrentUser extends React.Component {
  render(){
    return (
      <div>
       <h4>Logged In as : </h4>
       <CurrentUserInfoContainer />
    </div>)
  }
}
export default CurrentUser;
