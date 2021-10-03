import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

const TeacherClass = ({ teacher }) => {
  const styles = useStyles();
  const history = useHistory();
  const location = useLocation();

  const onSubjectHandler = (item) => {
    // history.push({
    //   pathname: `${location.pathname}/iron`,
    //   state: {
    //     item: item,
    //   },
    // });
    history.push({
      pathname: `/subjects`,
      state: {
        item: item,
      },
    });
  };
  return (
    <>
      {teacher &&
        teacher.classes.map((item) => {
          return (
            <Card
              className={styles.root}
              key={item.classId}
              onClick={() => onSubjectHandler(item)}
            >
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Box component="h2">CLass :</Box>
                    <h4>{item.className}</h4>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </>
  );
};

export default TeacherClass;
