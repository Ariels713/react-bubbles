import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    margin:" 0 auto",
    marginTop:"100px"
  },
});

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom color="secondary">
        Welcome To the Bubbles App!!!
      </Typography>
    </div>
  );
};

export default WelcomePage;
