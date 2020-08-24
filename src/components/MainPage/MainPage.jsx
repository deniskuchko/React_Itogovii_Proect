import React from "react";

import s from "./MainPage.module.scss";
import * as axios from "axios";
import userPhoto from "../../assets/image/user.png";

class MainPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://conduit.productionready.io/api/articles?limit=${this.props.pageSize}&amp;offset=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.articles);
        this.props.setTotalUsersCount(response.data.articlesCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://conduit.productionready.io/api/articles?limit=${this.props.pageSize}&amp;offset=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.articles);
      });
  };
  render() {
    let pageCount = Math.ceil(this.props.articlesCount / this.props.pageSize);
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
                className={this.props.currentPage === p ? s.selectedPage : ""}
                onClick={(e) => {
                  this.onPageChange(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.articles.map((u) => (
          <div key={u.slug} className={s.personArticle}>
            <span className={s.infoPerson}>
              <div className={s.personIMGMainPage}>
                <img
                  src={u.image !== null ? u.author.image : userPhoto}
                  className={s.userPhoto}
                />
              </div>
              <div>{u.author.username}</div>
              <div>{u.createdAt}</div>
              <div>{u.title}</div>
            </span>
            <span>
              {u.favorited ? (
                <button
                  onClick={() => {
                    this.props.unLike(u.slug);
                  }}
                >
                  0
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.like(u.slug);
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
  }
}
export default MainPage;
