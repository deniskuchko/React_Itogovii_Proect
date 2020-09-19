import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PostOfUser from "./PostOfUser";
import {
  decreasePostLikes,
  getPostId,
  increasePostLikes,
  setPost,
} from "../../redux/post-reducer";

class PostOfUserContainer extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.getPostId(postId);
  }

  render() {
    return (
      <>
        <PostOfUser
          post={this.props.post}
          isLike={this.props.isLike}
          isAuth={this.props.isAuth}
          increaseLikes={this.props.increasePostLikes}
          decreaseLikes={this.props.decreasePostLikes}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    post: state.post.post,
    isLike: state.post.isLike,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getPostId,
    decreasePostLikes,
    increasePostLikes,
    setPost,
  }),
  withRouter
)(PostOfUserContainer);
