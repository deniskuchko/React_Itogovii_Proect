import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {} from "../../redux/mainPage-reducer";
import Profile from "./Profile";
import { setUsersProfile } from "../../redux/profilePage-reducer";
import { withRouter } from "react-router-dom";
class ProfileContainer extends React.Component {
  constructor() {
    super();

    this.id = 0;
    this.user = {};
    this.posts = [];
  }

  async componentDidMount() {
    /* await this.getUserData();
    await this.getUserPosts();

    console.log(this.user);
    console.log(this.posts); */
    let userId = this.props.match.params.userId;
    console.log(this.props.match.params);
    !userId && (userId = 2);

    axios.get(`http://localhost:3000/users`).then((responce) => {
      console.log(responce);
      this.props.setUsersProfile(responce.data.user[`${userId}`]);
    });
  }

  /* .get("http://localhost:3000/users" + userId)              !!!!!  как создать в локал хосте объект с адресом .../uder/1
      .then((response) => {
        console.log(response.data);
        this.props.setUsersProfile(response.data);
      }); */
  /* async getUserData() {
    const user = await axios.get(`http://localhost:3000/users`);

    this.user = user.data;
  }

  async getUserPosts() {
    const posts = await axios.get("http://localhost:3000/posts");

    this.posts = (posts.data || []).filter(({ userId }) => userId === this.id);
  } */
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    setUsersProfile,
  })(ProfileContainer)
);
