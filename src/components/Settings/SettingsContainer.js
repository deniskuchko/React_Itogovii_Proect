import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { changeUserData } from "../../redux/auth-reducer";
import { maxLengthCreator, required } from "../../utils/validatirs/validators";
import { FormControl } from "../common/FormsControls/FormControls";

import s from "./Settings.module.css";

const Input = FormControl("input");
let maxLength25 = maxLengthCreator(25);

function Settings(props) {
  return (
    <form onSubmit={props.handleSubmit} className={s.sign}>
      <div>
        <Field
          placeholder={"New login"}
          name={"login"}
          component={Input}
          validate={[required, maxLength25]}
        />
      </div>
      <div>
        <Field
          placeholder={"New password"}
          name={"password"}
          component={Input}
          validate={[required, maxLength25]}
        />
      </div>

      <div>
        <button>Change the data</button>
      </div>
    </form>
  );
}
const SettingsRedux = reduxForm({
  form: "settings",
})(Settings);

class SettingsContainer extends React.Component {
  onSubmit = (formData) => {
    this.props.changeUserData(
      this.props.userId,
      formData.login,
      this.props.email,
      formData.password
    );
  };

  render() {
    return (
      <div>
        <SettingsRedux onSubmit={this.onSubmit} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  userId: state.auth.userId,
  email: state.auth.email,
});

export default connect(mapStateToProps, { changeUserData })(SettingsContainer);
