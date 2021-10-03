import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      padding: theme.spacing(4),
    },
  },
}));

const PrincipalMain = ({ eachTeacher }) => {
  const history = useHistory();

  const teacherDetailHandler = (eachTeacher) => {
    const id = eachTeacher.teacher_id;
    history.push(`/principal/teacher/${id}`);
  };

  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onClick={() => teacherDetailHandler(eachTeacher)}
    >
      <Paper elevation={3} height="200px">
        <Typography>{eachTeacher.teacher_name}</Typography>
        <Typography>{eachTeacher.teacher_id}</Typography>
      </Paper>
    </div>
  );
};

export default PrincipalMain;
