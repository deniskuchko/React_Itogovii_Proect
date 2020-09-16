import React from "react";

import s from "./PostOfUser.module.scss";
import userPhoto from "../../assets/image/user.png";

let PostOfUser = (props) => {
  return (
    <div>
      <div>{props.post.title}</div>
      <button
        onClick={
          props.isLike
            ? () => props.increasePostLikes
            : () => props.decreasePostLikes
        }
      >
        {props.post.likes}
      </button>
      {/* onClick={()=>} */}
    </div>
  );
};
export default PostOfUser;
