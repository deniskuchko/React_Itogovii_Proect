import React from "react";

import s from "./MainPagePaginationsOfWords.module.css";
let MainPagePaginationsOfWords = (props) => {
  let populrTags = ["mama", "lorem", "bla"];

  return (
    <div className={s.paginationInMainPage}>
      {populrTags.map((u, i) => (
        <div key={i}>
          <button
            onClick={() => {
              props.filterPost(u);
            }}
          >
            {u}
          </button>
        </div>
      ))}
    </div>
  );
};
export default MainPagePaginationsOfWords;
