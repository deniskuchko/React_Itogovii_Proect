import React from "react";

let MainPagePaginationsOfWords = (props) => {
  let populrTags = ["mama", "lorem", "bla"];

  return (
    <div className="mainPage">
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
