import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validatirs/validators";
import { FormControl } from "../common/FormsControls/FormControls";
import { connect } from "react-redux";
import { setNewUserData } from "../../redux/auth-reducer";
import { passwordCoding } from "../../crypto/crypto";

import "./SignUp.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const maxLength25 = maxLengthCreator(25);
const Input = FormControl("input");

function SignUpForm(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={`${classes.form} sign`}
          noValidate
          onSubmit={props.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                placeholder={"login"}
                name={"login"}
                component={Input}
                validate={[required, maxLength25]}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                placeholder={"email"}
                name={"email"}
                component={Input}
                validate={[required, maxLength25]}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                placeholder={"password"}
                name={"password"}
                component={Input}
                validate={[required, maxLength25]}
              />
            </Grid>
            <Grid item xs={12}>
              <div className="checkbox">
                <Field
                  type={"checkbox"}
                  name={"rememberMe"}
                  component={Input}
                />
                Remember Me
              </div>
            </Grid>
          </Grid>
          <button>Sign Up</button>

          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/signin" variant="body2">
                Already have an account? Sign in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const SignUpReduxForm = reduxForm({
  form: "signUp",
})(SignUpForm);

const SignUp = (props) => {
  const onSubmit = (formData) => {
    const hash = passwordCoding(formData.password);
    props.setNewUserData(
      formData.login,
      formData.email,
      hash,
      formData.rememberMe
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/"} />;
  }
  return (
    <div>
      <SignUpReduxForm onSubmit={onSubmit} />
    </div>
  );
};
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const SignUpContainer = connect(mapStateToProps, { setNewUserData })(SignUp);
export default SignUpContainer;
