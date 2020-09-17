import React from "react";
import s from "./ArticlesOfLoginUser.module.css";

let ArticlesOfLoginUser = (props) => {
  return (
    <div className={s.myArticles}>
      <div>
        My posts:
        {props.myPost.map((p, i) => {
          return (
            <div key={p.id} className={s.myPosts}>
              <span>Post number: {i + 1}</span>
              <div>
                <div>Title: {p.title}</div>
                <div>Article is about: {p.articleAbout}</div>
                <div>Text: {p.textOfArticle}</div>
                <div> Numbers of likes: {p.likes}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticlesOfLoginUser;
