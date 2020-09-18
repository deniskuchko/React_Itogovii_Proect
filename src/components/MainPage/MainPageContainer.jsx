import React from "react";
import { connect } from "react-redux";

import {
  like,
  unLike,
  requestPosts,
  filterPost,
} from "../../redux/mainPage-reducer";
import Preloader from "../common/Preloader/Preloader";

import {
  getPost,
  getPageSize,
  getPostCount,
  getCurrentPage,
  getIsFetching,
  getIsAuth,
} from "../../redux/mainPage-selectors/mainPage-selectors";
import MainPage from "./MainPage";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.requestPosts(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.requestPosts(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MainPage
          totalItemsCount={this.props.postCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          post={this.props.post}
          onPageChange={this.onPageChange}
          unLike={this.props.unLike}
          like={this.props.like}
          isAuth={this.props.isAuth}
          filterPost={this.props.filterPost}
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
  requestPosts,
  filterPost,
})(MainPageContainer);
