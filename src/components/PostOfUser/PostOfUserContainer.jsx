import React from "react";
import { connect } from "react-redux";

import Preloader from "../common/Preloader/Preloader";
import PostOfUser from "./PostOfUser";
import { getPostId } from "../../redux/post-reducer";
import { useState } from "react";
import { useEffect } from "react";

const PostOfUserContainer = (props) => {
  debugger;
  /* const postId = props.match.params.id
   props.getPostId(postId) */
  /* const [postId, setPost] = useState[props.post.postId];

  useEffect(() => {
    setPost(props.postId);
  }, [props.postId]);
  props.getPostId(postId); */
  return (
    <>
      {/* {this.props.isFetching ? <Preloader /> : null} */}
      <PostOfUser post={props.post} />
    </>
  );
};
let mapStateToProps = (state) => {
  return {
    post: state.post.post,
  };
};

export default connect(mapStateToProps, { getPostId })(PostOfUserContainer);
