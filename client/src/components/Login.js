// import React from "react";

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth"
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button_style: {
    marginTop: "1rem",
    height: 35,
    width: 160,
    backgroundColor: "#A4243B",
    color:"white"
  },
  loader_stylers: {
    color: "#FF0001",
    position: "absolute",
    // top: '10%',
    left: "48%",
    marginTop: "1.5rem",
  },
  login: {
    marginTop: "5rem",
  },
  error_message: {
    color: "#FF0001",
    textAlign:"center"
  },
}));

const LogInForm = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage] = useState(
    "Username or Password incorrect. Please see Readme"
  );
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axiosWithAuth()
    .post("/api/login", userData)
      // .then(res => console.log("%c res.data", "color:yellow",  res.data.payload))
      .then((res) => {
        localStorage.setItem("token",res.data.payload);
        history.push('/bubblePage')
      })
      .then(setLoading(false))
      .then(() => {
          setUserData({
              username:"",
              password:""
          })
      })
      
      .catch(() => {
          setError(true)
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container direction="column" lg={4} >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" className={classes.login}>
                Log In
              </Typography>
            </Grid>
            {error && (
              <FormHelperText className={classes.error_message}>
                {errorMessage}
              </FormHelperText>
            )}
            <form>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                {loading === false ? (
                  <Button
                    variant="contained"
                    className={classes.button_style}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    Submit
                  </Button>
                ) : (
                  <CircularProgress
                    size={24}
                    className={classes.loader_stylers}
                    label="Loading"
                  />
                )}
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogInForm;
