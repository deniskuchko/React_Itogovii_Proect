import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormControl } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validatirs/validators";
import { setNewArticleReducer } from "../../redux/myArticles-reducer";
import { Redirect } from "react-router-dom";

import s from "./MyArticles.module.css";

const Input = FormControl("input");
const Textarea = FormControl("textarea");

const MyArticlesForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.sign}>
      <div>
        <Field
          placeholder={"Title of new article"}
          name={"title"}
          component={Input}
          validate={[required]}
          //value={props}
          //validators ={}
        />
      </div>
      <div>
        <Field
          placeholder={"Article is about"}
          name={"about"}
          component={Input}
          validate={[required]}
          //value={props}
          //validators ={}
        />
      </div>

      <div>
        <Field
          placeholder={"Write you article"}
          name={"textOfArticle"}
          component={Textarea}
          validate={[required]}
          //value={props}
          //validators ={}
        />
      </div>

      <div>
        <Field
          placeholder={"Enter tags"}
          name={"keywords"}
          component={Input}
          validate={[required]}
          //value={props}
          //validators ={}
        />
      </div>

      <div>
        <button>
          Save
          {/* <IconLabelButtons /> */}
        </button>
      </div>
    </form>
  );
};

const MyArticlesReduxForm = reduxForm({ form: "articles" })(MyArticlesForm);

const MyArticles = (props) => {
  const onSubmit = (formData) => {
    props.setNewArticleReducer(
      props.login,
      formData.title,
      formData.about,
      formData.textOfArticle,
      formData.keywords.split(", "),
      props.userId
    );
  };
  if (props.isArticle) {
    return <Redirect to={`/profile/${props.userId}`} />;
  }
  if (!props.userId) {
    return <Redirect to="/signin" />;
  }

  return <MyArticlesReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  login: state.auth.login,
  isArticle: state.myArticles.isArticle,
});
export default connect(mapStateToProps, { setNewArticleReducer })(MyArticles);
