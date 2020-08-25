import React from "react";

import s from "./MainPage.module.scss";
import userPhoto from "../../assets/image/user.png";
import { NavLink } from "react-router-dom";

let MainPage = (props) => {
  let pageCount = Math.ceil(props.articlesCount / props.pageSize);
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
      {props.articles.map((u) => (
        <div key={u.slug} className={s.personArticle}>
          <span className={s.infoPerson}>
            <div className={s.personIMGMainPage}>
              <NavLink to={"/profile/" + u.slug}>
                <img
                  src={u.image !== null ? u.author.image : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>{u.author.username}</div>
            <div>{u.createdAt}</div>
            <div>{u.title}</div>
          </span>
          <span>
            {u.favorited ? (
              <button
                onClick={() => {
                  props.unLike(u.slug);
                }}
              >
                0
              </button>
            ) : (
              <button
                onClick={() => {
                  props.like(u.slug);
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
