import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TabularData from "../../components/TabularData/TabularData";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { classAction } from "../../reducers/classReducer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  capitalize: {
    textTransform: "capitalize",
    paddingLeft: 5,
  },
});

const TeacherSubject = ({ item }) => {
  const [showAttendance, setShowAttendance] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.classReducer.class);
  useEffect(() => {
    const classSelected = location.state.item.classId;
    dispatch(classAction.fetchClass(classSelected));
  }, []);

  const styles = useStyles();

  const displayAttendance = () => {
    setShowAttendance((prev) => !prev);
  };

  console.log(">>>>>", location);
  return (
    <>
      <Box>
        <Card className={styles.root} key={item.subjectId}>
          <CardActionArea>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Box component="h2">Subject :</Box>
                <h4 className={styles.capitalize}>{item.subjectName}</h4>
              </Box>
              <AddBoxIcon onClick={displayAttendance} />
            </CardContent>
          </CardActionArea>
        </Card>
        {tableData && showAttendance && (
          <TabularData
            data={tableData}
            classSelected={location}
            subject={item}
          />
        )}
      </Box>
    </>
  );
};

export default TeacherSubject;
