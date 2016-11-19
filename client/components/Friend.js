import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props, ' FRIENDS PROP')
  }
  render(){
    let style = {"float":"right",
                 "display": "inline",
                 "height": "auto",
                 "width": "40%",
                 "overflowY":"auto"};
    return (
      <div className="col-md-4 panel panel-defaults" style={style}>
        <FriendAdd />
        <FriendDetail />
      </div>
      )
  }
}

function mapStateToProps(state) {
  console.log(window.currentUser_Id,  ' USER ID *********')
  console.log(state.isAuthorized,  ' state.isAuthorized *********')
  return {
    currentUser_Id: state.isAuthorized[1]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);