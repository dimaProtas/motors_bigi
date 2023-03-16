import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { profileUser, getStatus, updateUserStatus } from '../../reducer/profile-reduser.js';
import { useParams } from 'react-router-dom';
import withAuthRedirectComponent from '../../hoc/withAuthRedirectComponent.jsx';
import { compose } from 'redux';


export function withRouter(Child){
  return(props)=>{

     const match  = {params: useParams()};
     return <Child {...props}  match = {match}/>
 }
}


class ProfileComponent extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    
    this.props.profileUser(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
    )
  }
}
//сделал HOC компонет который оборачивает компонент и редиректит его
//этот код не нужен, так как теперь оборачивает compose
// let AuthRedirectComponent = withAuthRedirectComponent(ProfileComponent)




let mapStateToProps = (state) => {
  return {
    // profile: state.ProfilePage.profile
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}


// const TakeParams = (props) => {
//   return <ProfileComponent {...props} param={useParams} />
// }



export default compose (
  withAuthRedirectComponent,
  connect(mapStateToProps, {profileUser, getStatus, updateUserStatus}),
  withRouter
) (ProfileComponent) 
//compose оборачивает попорядку компоненты 1.ProfileComponent, 2.connect(mapStateToProps, {profileUser}),3.withAuthRedirectComponent
