import React from "react";

import userPhoto from "../../assets/image/user.png";
import s from "./Profile.module.scss";
import Preloader from "../common/Preloader/Preloader";
let Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.profilePage}>
      <img
        src={
          props.profile.profileImage
        } /* {props.profile.profileImage ? `${props.profile.profileImage}` : userPhoto} */
        className={s.userPhoto}
      />
      <div>Name:{props.profile.name}</div>
      <div>email:{props.profile.email}</div>
      <div>nickname:{props.profile.nickname}</div>
    </div>
  );
};
export default Profile;
