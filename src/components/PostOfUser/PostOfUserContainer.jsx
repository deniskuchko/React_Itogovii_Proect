import React from "react";
import { connect } from "react-redux";

import Preloader from "../common/Preloader/Preloader";
import PostOfUser from "./PostOfUser";
import {
  decreasePostLikes,
  getPostId,
  increasePostLikes,
} from "../../redux/post-reducer";
import { useState } from "react";
import { useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class PostOfUserContainer extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.getPostId(postId);
  }
  /* const [postId, setPost] = useState(props.match.params.id);

  useEffect(() => {
    setPost(props.match.params.id);
    getPostId(postId);
  }, [props]);
  debugger; */
  render() {
    return (
      <>
        {/* {this.props.isFetching ? <Preloader /> : null} */}
        <PostOfUser
          post={this.props.post}
          isLike={this.props.isLike}
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
  };
};

export default compose(
  connect(mapStateToProps, { getPostId, decreasePostLikes, increasePostLikes }),
  withRouter
)(PostOfUserContainer);
