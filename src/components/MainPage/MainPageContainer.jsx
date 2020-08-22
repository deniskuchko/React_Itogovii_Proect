import React from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import { likeAC, unLikeAC, setUsersAC } from "../../redux/mainPage-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    like: (userId) => {
      dispatch(likeAC(userId));
    },
    unLike: (userId) => {
      dispatch(unLikeAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
