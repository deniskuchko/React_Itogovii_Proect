import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../common/FormsControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validatirs/validators";
import { getLogin } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const Input = FormControl("input");
let maxLength25 = maxLengthCreator(25);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInSideForm(props) {
  const classes = useStyles();

  return (
    <Grid id="signInMain" container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={`${classes.form} sign`}
            noValidate
            onSubmit={props.handleSubmit}
          >
            <div>
              <Field
                placeholder={"login"}
                name={"login"}
                component={Input}
                validate={[required, maxLength25]}
              />
            </div>
            <div>
              <Field
                placeholder={"password"}
                name={"password"}
                component={Input}
                validate={[required, maxLength25]}
              />
            </div>
            <div className="checkbox">
              <Field type={"checkbox"} name={"rememberMe"} component={Input} />
              Remember Me
            </div>
            <div>
              <button>Login</button>
            </div>
            <Grid container>
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
const SignInSideReduxForm = reduxForm({
  form: "login",
})(SignInSideForm);

class SignInSide extends React.Component {
  onSubmit = (formData) => {
    this.props.getLogin(formData.login, formData.password, formData.rememberMe);
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to={`/`} />;
    }
    return (
      <div>
        <SignInSideReduxForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
});
const SignInContainer = connect(mapStateToProps, { getLogin })(SignInSide);
export default SignInContainer;
