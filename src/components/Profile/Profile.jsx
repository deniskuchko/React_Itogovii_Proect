import React from "react";

import userPhoto from "../../assets/image/user.png";
import s from "./Profile.module.scss";
import Preloader from "../common/Preloader/Preloader";
import * as axios from "axios";
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
      {props.profile.followed ? (
        <button
          onClick={() => {
            axios.get(`http://localhost:3000/posts`).then((response) => {
              console.log(response);
              props.follow();
            });
            /* axios.post(`http://localhost:3000/posts`).then((response) => {
              console.log(response);
              props.follow(props.profile.id);
            }); */
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            /* axios.post("http://localhost:3000/posts").then((response) => {
              response.data = props.follow();
            }); */
          }}
        >
          follow
        </button>
      )}
    </div>
  );
};
export default Profile;
