import React from "react";

import userPhoto from "../../assets/image/user.png";
import s from "./Profile.module.scss";
import Preloader from "../common/Preloader/Preloader";
let Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props);
  return (
    <div className={s.profilePage}>
      <img
        src="https://thispersondoesnotexist.com/image" /* {props.profile.image ? `${props.profile.image}` : userPhoto} */
        className={s.userPhoto}
      />
    </div>
  );
};
export default Profile;
