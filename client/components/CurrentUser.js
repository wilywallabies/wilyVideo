import React from 'react';
import CurrentUserInfoContainer from '../containers/currentUserInfoContainer';

class  CurrentUser extends React.Component {
  render(){
    return (
      <div className="col-md-4">
       <CurrentUserInfoContainer />
    </div>)
  }
}
export default CurrentUser;
