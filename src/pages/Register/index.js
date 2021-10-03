import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: 10,
    padding: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="firtName" label="FirstName" />
      <TextField id="lastName" label="LastName" />
      <TextField id="employeeId" label="Employee ID" />
      <TextField id="password" label="Password" type="password" />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
      />
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
