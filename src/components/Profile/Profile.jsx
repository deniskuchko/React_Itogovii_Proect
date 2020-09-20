import React from "react";

import userPhoto from "../../assets/image/user.png";
import Preloader from "../common/Preloader/Preloader";
import ArticlesOfLoginUserContainer from "../ArticlesOfLoginUser/ArticlesOfLoginUserContainer";

import s from "./Profile.module.css";

let Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profilePage}>
      <img
        src={
          props.profile.profileImage ? props.profile.profileImage : userPhoto
        }
        alt="user "
        className={s.userPhoto}
      />
      <div>Name:{props.profile.login}</div>
      <div>email:{props.profile.email}</div>
      {props.profile.followed ? (
        <button
          onClick={() => {
            props.follow();
          }}
        >
          unfollow
        </button>
      ) : (
        <button onClick={() => {}}>follow</button>
      )}
      <div>
        <ArticlesOfLoginUserContainer />
      </div>
    </div>
  );
};
export default Profile;
