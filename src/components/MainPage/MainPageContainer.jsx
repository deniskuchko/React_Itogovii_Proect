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
    post: state.mainPage.post,
    pageSize: state.mainPage.pageSize,
    postCount: state.mainPage.postCount,
    currentPage: state.mainPage.currentPage,
    isFetching: state.mainPage.isFetching,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  like,
  unLike,

  getPostsThunk,
  getPostsPageThunk,
})(MainPageContainer);
