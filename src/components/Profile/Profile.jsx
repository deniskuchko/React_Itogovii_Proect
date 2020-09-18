import React from "react";

import userPhoto from "../../assets/image/user.png";
import Preloader from "../common/Preloader/Preloader";
import * as axios from "axios";
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
          props.profile.profileImage
            ? `${props.profile.profileImage}`
            : userPhoto
        }
        /* props.profile.profileImage */
        /* {props.profile.profileImage ? `${props.profile.profileImage}` : userPhoto} */
        className={s.userPhoto}
      />
      <div>Name:{props.profile.login}</div>
      <div>email:{props.profile.email}</div>
      {props.profile.followed ? (
        <button
          onClick={() => {
            axios.get(`http://localhost:3000/posts`).then((response) => {
              console.log(response);
              props.follow();
            });
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
      <div>
        <ArticlesOfLoginUserContainer />
      </div>
    </div>
  );
};
export default Profile;
