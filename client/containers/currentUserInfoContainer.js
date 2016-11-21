import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUserInfo } from '../actions/friendsAction';
import { toggleOnline, changeStatus } from '../actions/onlineStatusActions';

class UserInfo extends React.Component {
    constructor(props){
    super(props);
    this.state = { currentUser: {email:'', userName:'', status:''} };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUserInfo();
    this.props.toggleOnline();
  }

  //After receiving new prop, will set as this.setState using nextProps
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, ' MY NEXT PROPS!')
    this.setState( {currentUser:{email:nextProps.user.email,userName:nextProps.user.username, status: nextProps.user.status}})
  }

  handleChange(e){
    e.preventDefault();
    this.props.changeStatus(e.target.value);
  }

  render(){
    return (

      <div>
        <div>
          <h5>Email: {this.state.currentUser.email} </h5>
        </div>

        <div>
         <h5>UserID: {this.state.currentUser.userName} </h5>
        </div>

        <div>
          <h5> Status:
          {
            this.state.currentUser.status === 'y' ? ' Online' :
            this.state.currentUser.status === 'away' ? ' Away' : ' Offline Mode'
          }
          </h5>
          <form onChange={this.handleChange}>
            <div> Change Status :
              <select style={{"width":"20%"}} className="form-control form-control-sm">
                <option value="y">Online</option>
                <option value="away">Away</option>
                <option value="n">Offline Mode</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      )
  }

}

function mapStateToProps(state){
  console.log(state, ' STATE!')
  return {
    user: state.currentUser
  }
}
//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCurrentUserInfo, toggleOnline, changeStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
