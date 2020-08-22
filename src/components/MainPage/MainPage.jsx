import React from "react";

import s from "./MainPage.module.scss";

function MainPage(props) {
  return (
    <div className="mainPage">
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUsers} className={s.userPhoto} />
            </div>
            <div>{u.name}</div>
            <div>{u.data}</div>
            <div>{u.title}</div>
          </span>
          <span>
            {u.like ? (
              <button onClick={() => props.unLike(u.id)}>0</button>
            ) : (
              <button onClick={() => props.like(u.id)}>1</button>
            )}
          </span>{" "}
        </div>
      ))}
    </div>
  );
}
export default MainPage;
