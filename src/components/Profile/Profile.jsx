import React from "react";

import userPhoto from "../../assets/image/user.png";
import Preloader from "../common/Preloader/Preloader";
import ArticlesOfLoginUserContainer from "../ArticlesOfLoginUser/ArticlesOfLoginUserContainer";

import s from "./Profile.module.css";
import { ContainedButtons } from "../common/button/button";

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
        <ContainedButtons
          text={"unfollow"}
          click={() => {
            props.unFollowThunk(props.profile);
          }}
        />
      ) : (
        <ContainedButtons
          text={"follow"}
          click={() => {
            props.followThunk(props.profile);
          }}
        />
      )}
      <div>
        <ArticlesOfLoginUserContainer />
      </div>
    </div>
  );
};
export default Profile;
