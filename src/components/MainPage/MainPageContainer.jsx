import React from "react";
import { connect } from "react-redux";

import {
  like,
  unLike,
  getPostsThunk,
  getPostsPageThunk,
} from "../../redux/mainPage-reducer";
import MainPage from "./MainPage";
import Preloader from "../common/Preloader/Preloader";

import {
  getPost,
  getPageSize,
  getPostCount,
  getCurrentPage,
  getIsFetching,
  getIsAuth,
} from "../../redux/mainPage-selectors/mainPage-selectors";
import MyArticles from "../MyArticles/MyArticles";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.getPostsThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getPostsPageThunk(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MainPage
          postCount={this.props.postCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          post={this.props.post}
          onPageChange={this.onPageChange}
          unLike={this.props.unLike}
          like={this.props.like}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}
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
  getPostsThunk,
  getPostsPageThunk,
})(MainPageContainer);
