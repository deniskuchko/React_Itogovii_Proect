import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import {
  likeAC,
  unLikeAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/mainPage-reducer";

let mapStateToProps = (state) => {
  return {
    articles: state.mainPage.articles,
    pageSize: state.mainPage.pageSize,
    articlesCount: state.mainPage.articlesCount,
    currentPage: state.mainPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    like: (userId) => {
      dispatch(likeAC(userId));
    },
    unLike: (userId) => {
      dispatch(unLikeAC(userId));
    },
    setUsers: (author) => {
      dispatch(setUsersAC(author));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
