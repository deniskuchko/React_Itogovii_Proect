import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {
  like,
  unLike,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
} from "../../redux/mainPage-reducer";
import MainPage from "./MainPage";
import Preloader from "../common/Preloader/Preloader";

class MainPageContainer extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    axios
      .get(
        `http://localhost:3000/posts?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);

        this.props.setUsers(response.data.post);
        this.props.setTotalUsersCount(response.data.postCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.toogleIsFetching(true);

    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `http://localhost:3000/posts?_page=${pageNumber}&_limit=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);

        this.props.setUsers(response.data.post);
      });
    debugger;
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
  };
};

export default connect(mapStateToProps, {
  like,
  unLike,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toogleIsFetching,
})(MainPageContainer);
