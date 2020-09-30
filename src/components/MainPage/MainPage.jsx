import React from "react";

import userPhoto from "../../assets/image/user.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import MainPagePaginationsOfWords from "./MainPagePaginationsOfWords/MainPagePaginationsOfWords";

import s from "./MainPage.module.css";
import { ContainedButtons, TextButtons } from "../common/button/button";

let MainPage = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  post,
  portionSize = 2,
  ...props
}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPorionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="mainPage">
      <div className={s.numberPagination}>
        {portionNumber > 1 && (
          <ContainedButtons
            text={"Prev"}
            click={() => {
              setPorionNumber(portionNumber - 1);
            }}
          />
        )}
        <div className={s.itemPagination}>
          {page
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <TextButtons
                  text={p}
                  click={() => {
                    onPageChange(p);
                  }}
                />
              );
            })}
        </div>
        {portionCount > portionNumber && (
          <ContainedButtons
            text={"Next"}
            click={() => {
              setPorionNumber(portionNumber + 1);
            }}
          />
        )}
      </div>
      <MainPagePaginationsOfWords filterPost={props.filterPost} />
      {post.map((u) => (
        <div key={u.id} className={s.personArticle}>
          <span className={s.infoPerson}>
            <div className={s.personIMGMainPage}>
              <NavLink to={"/profile/" + u.userId}>
                <img
                  src={u.image ? u.image : userPhoto}
                  alt="User "
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
              <ContainedButtons
                text="Unfollow"
                click={() => {
                  props.unLike(u.id);
                }}
              />
            ) : (
              <ContainedButtons
                text="follow"
                click={() => {
                  props.like(u.id);
                }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
export default MainPage;
