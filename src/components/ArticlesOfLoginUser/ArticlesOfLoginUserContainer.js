import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserPosts } from "../../redux/userPosts-reduser";
import ArticlesOfLoginUser from "./ArticlesOfLoginUser";

class ArticlesOfLoginUserContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.usersId;
    this.props.getUserPosts(usersId);
  }
  render() {
    return <ArticlesOfLoginUser {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    //userId: state.auth.userId,
    myPost: state.userPosts.myPost,
  };
};
export default compose(
  connect(mapStateToProps, { getUserPosts }),
  withRouter
)(ArticlesOfLoginUserContainer);
