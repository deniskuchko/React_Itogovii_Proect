import React from "react";

import s from "./MainPage.module.scss";
import userPhoto from "../../assets/image/user.png";
import { NavLink, Redirect } from "react-router-dom";
import { useState } from "react";

let MainPage = (props) => {
  let pageCount = Math.ceil(props.postCount / props.pageSize);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  return (
    <div className="mainPage">
      <div>
        {page.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selectedPage : ""}
              onClick={(e) => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.post.map((u) => (
        <div key={u.id} className={s.personArticle}>
          <span className={s.infoPerson}>
            <div className={s.personIMGMainPage}>
              <NavLink to={"/profile/" + u.userId}>
                <img
                  src={u.image !== null ? u.image : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>{u.name}</div>

            <NavLink to={"/post/" + u.id}>
              <div>
                <div>title: {u.title}</div>
                <div> Article: {u.articleAbout}</div>

                <div>Text of Article: {u.textOfArticle}</div>
              </div>
            </NavLink>
          </span>
          <span>
            {u.favorited ? (
              <button
                onClick={() => {
                  /* if (!props.isAuth) {
                    return <Redirect to={"/signin"} />;
                  } else {
                    props.unLike(u.id);
                  } */
                  props.unLike(u.id);
                }}
              >
                0
              </button>
            ) : (
              <button
                onClick={() => {
                  props.like(u.id);
                }}
              >
                1
              </button>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
export default MainPage;
