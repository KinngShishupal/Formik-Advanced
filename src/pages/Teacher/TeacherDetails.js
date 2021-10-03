import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

const TeacherDetails = ({ teacher }) => {
  const classes = useStyles();
  return (
    <div>
      {teacher && (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={teacher.teacher_name}
              height="140"
              image={teacher.teacher_photo}
              title={teacher.teacher_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {teacher.teacher_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Phone :</strong>
                {teacher.teacher_phone}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Address :</strong>
                {teacher.teacher_address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <strong>Emergency Contact :</strong>
                {teacher.teacher_alt_name}({teacher.teacher_alt_relation})/
                {teacher.teacher_alt_phone}
              </Typography>
            </CardContent>
            <CardContent>
              {teacher.classes &&
                teacher.classes.map((item) => {
                  return (
                    <div key={item.classId}>
                      <Box display="flex" alignItems="center">
                        <Box component="h2">CLass :</Box>
                        <h4>{item.className}</h4>
                      </Box>
                      <Box component="h2">Subjects :</Box>
                      {item.subjects.map((sub) => {
                        return (
                          <div key={sub.subjectId}>
                            <h4>{sub.subjectName}</h4>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default TeacherDetails;
