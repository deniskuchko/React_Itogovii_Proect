import React from "react";
import { connect } from "react-redux";

import { like, unLike, requestPosts } from "../../redux/mainPage-reducer";
import Preloader from "../common/Preloader/Preloader";

import {
  getPost,
  getPageSize,
  getPostCount,
  getCurrentPage,
  getIsFetching,
  getIsAuth,
} from "../../redux/mainPage-selectors/mainPage-selectors";
import { useState } from "react";
import { useEffect } from "react";
import MainPage from "./MainPage";

const MainPageContainerWithHooks = (props) => {
  /* componentDidMount() {
    this.props.getPostsThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getPostsPageThunk(pageNumber, this.props.pageSize);
  }; */
  let [currentPage, setCurrentPage] = useState(props.currentPage);
  let [pageSize, setPageSize] = useState(props.pageSize);

  useEffect(() => {});
  /* onPageChange = (pageNumber) => {
    this.props.getPostsPageThunk(pageNumber, props.pageSize);
  }; */
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <MainPage
        postCount={props.postCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        post={props.post}
        /*         onPageChange={onPageChange}
         */ unLike={props.unLike}
        like={props.like}
        isAuth={props.isAuth}
      />
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    post: getPost(state),
    pageSize: getPageSize(state),
    postCount: getPostCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, {
  like,
  unLike,
  requestPosts,
})(MainPageContainerWithHooks);
