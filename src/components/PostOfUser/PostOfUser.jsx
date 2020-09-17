import React from "react";

import userPhoto from "../../assets/image/user.png";

import s from "./PostOfUser.module.css";

let PostOfUser = (props) => {
  let {
    id,
    name,
    image,
    title,
    articleAbout,
    textOfArticle,
    likes,
    favorited,
    keywords,
    userId,
  } = props.post;
  return (
    <div>
      <div>{props.post.title}</div>
      <button
        onClick={
          props.isLike
            ? () =>
                props.decreaseLikes(
                  id,
                  name,
                  image,
                  title,
                  articleAbout,
                  textOfArticle,
                  likes,
                  favorited,
                  keywords,
                  userId
                )
            : () =>
                props.increaseLikes(
                  id,
                  name,
                  image,
                  title,
                  articleAbout,
                  textOfArticle,
                  likes,
                  favorited,
                  keywords,
                  userId
                )
        }
      >
        {props.post.likes}
      </button>
      {/* onClick={()=>} */}
    </div>
  );
};
export default PostOfUser;
