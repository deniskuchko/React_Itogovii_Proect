import React from "react";
import { Redirect } from "react-router-dom";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";

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
  if (!props.isAuth) {
    return <Redirect to={"/signin"} />;
  }
  return (
    <div>
      <div className={s.articleCard}>
        <div>
          <img
            src={props.post.image ? props.post.image : userPhoto}
            alt="user "
          />
          <div className={s.itemText}>
            Name of person:<span> {props.post.name} </span>
            <span>
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
                <FavoriteTwoToneIcon />
                {props.post.likes}
              </button>
            </span>
          </div>
          <div className={s.itemText}>
            Title of article:<span> {props.post.title} </span>
          </div>
          <div className={s.itemText}>
            Article is about:<span> {props.post.textOfArticle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostOfUser;
