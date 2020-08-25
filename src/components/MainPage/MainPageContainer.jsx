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
        `https://conduit.productionready.io/api/articles?limit=${this.props.pageSize}&amp;offset=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);

        this.props.setUsers(response.data.articles);
        this.props.setTotalUsersCount(response.data.articlesCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.toogleIsFetching(true);

    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://conduit.productionready.io/api/articles?limit=${this.props.pageSize}&amp;offset=${pageNumber}`
      )
      .then((response) => {
        this.props.toogleIsFetching(false);

        this.props.setUsers(response.data.articles);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MainPage
          articlesCount={this.props.articlesCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          articles={this.props.articles}
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
    articles: state.mainPage.articles,
    pageSize: state.mainPage.pageSize,
    articlesCount: state.mainPage.articlesCount,
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
