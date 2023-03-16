import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';


const Profile = ({profile, store, status, updateUserStatus}) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
      <MyPostContainer store={store} />
    </div>
  )
}

export default Profile