import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import {} from "../../redux/mainPage-reducer";
import Profile from "./Profile";
import { setUsersProfile } from "../../redux/profilePage-reducer";
class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://conduit.productionready.io/api/articles?limit=10&amp;offset=1`
      )
      .then((response) => {
        debugger;
        this.props.setUsersProfile(response.data.articles[0].author);
      });
  }
  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {
  setUsersProfile,
})(ProfileContainer);
