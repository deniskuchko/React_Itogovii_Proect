import React from "react";
import s from "./ArticlesOfLoginUser.module.css";

let ArticlesOfLoginUser = (props) => {
  return (
    <div className={s.articleOfUser}>
      <div>
        {props.myPost.map((p, i) => {
          return (
            <div key={p.id} className={s.articleCard}>
              <span>Post number: {i + 1}</span>
              <div>
                <div>
                  Title: <span>{p.title}</span>
                </div>
                <div>
                  Article is about: <span>{p.articleAbout}</span>
                </div>
                <div>
                  Text: <span>{p.textOfArticle}</span>
                </div>
                <div>
                  {" "}
                  Numbers of likes:<span> {p.likes}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticlesOfLoginUser;
