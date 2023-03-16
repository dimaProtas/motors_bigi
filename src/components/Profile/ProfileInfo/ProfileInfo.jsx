import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ava from '../../../img/ava.png';
// import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateUserStatus}) => {

  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={s.motoImg} src='https://img4.goodfon.ru/original/2560x1024/3/db/chernyi-fon-mototsikl-mototsiklist.jpg' alt="moto" />
      </div>
      <div className={s.avatar_box}>
        <div className={s.avatar}>
          {/* <img src='https://i.pinimg.com/originals/cc/9f/1f/cc9f1f361a5504957c816106fff75d21.png' /> */}
          {/* <img className={s.avatarImg} src={props.profile.photos.large} /> */}
          {profile.photos.large ? <img className={s.avatarImg} src={profile.photos.large} alt="ava" /> 
          : <img className={s.avatarImg} src={ava} alt="ava" /> }
        </div>
        <div className={s.aboutMe}>
          <h2>{profile.fullName}</h2>
          <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
          {/* <p>Статус: {props.profile.lookingForAJobDescription}</p> */}
          <p>{profile.aboutMe}</p>
          <p>Работа: {profile.contacts.lookingForAJob ? 'В поиске' : 'Есть'}</p>
        </div>
        <ul  className={s.contacts}>
          Contacts
          {profile.contacts.vk ? <li>{profile.contacts.vk}</li> : null}
          {profile.contacts.facebook ? <li>{profile.contacts.facebook}</li> : null}
          {profile.contacts.instagram ? <li>{profile.contacts.instagram}</li> : null}
          {profile.contacts.website ? <li>{profile.contacts.website}</li> : null}
          {profile.contacts.twitter ? <li>{profile.contacts.twitter}</li> : null}
          {profile.contacts.youtube ? <li>{profile.contacts.youtube}</li> : null}
          {profile.contacts.github ? <li>{profile.contacts.github}</li> : null}
          {profile.contacts.mainLink ? <li>{profile.contacts.mainLink}</li> : null}
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo
