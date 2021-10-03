import React, { useEffect, useState } from "react";
import "./TabularData.css";
import Header from "./Header";
import Class from "./Class";
import List from "./students.json";
import getJsonData from "../../Utils/JsonData";
import Button from "@material-ui/core/Button";
import axios from "axios";

import moment from "moment";
import DatePicker from "../DatePicker";
import { useSelector } from "react-redux";

const TabularData = ({ data, classSelected, subject }) => {
  const [state, setState] = useState({ students: getJsonData(data) });
  const date = useSelector((state) => state.dateReducer.date);
  console.log("date is ", date, date.toDateString());
  const classCred = classSelected.state.item;
  const getAttendance = () => {
    console.log(state.students);
    //save attendance in the database
    //nedd to save date, attendace class wise and subject wise
    // const todayAttendance = {
    //   date: moment().format("DD/MM/YYYY"),
    //   class: {
    //     className: classCred.className,
    //     classId: classCred.classId,
    //     subject: {
    //       subjectName: subject.subjectName,
    //       subjectId: subject.subjectId,
    //       Attendance: state.students,
    //     },
    //   },
    // };

    // const todayAttendance = {
    //   year: date.getFullYear(),

    //   date: {
    //     monthName: date.getMonth().toString(),
    //     completeDate: date,
    //     class: {
    //       className: classCred.className,
    //       classId: classCred.classId,
    //       subjects: {
    //         subjectName: subject.subjectName,
    //         subjectId: subject.subjectId,
    //         Attendance: state.students,
    //       },
    //     },
    //   },
    // };

    const todayAttendance = {
      classId: classCred.classId,
      completeDate: date,
      date: date.toDateString(),
      subjectId: subject.subjectId,
      Attendance: state.students,
    };

    console.log("post", todayAttendance);
    axios
      .post("http://localhost:8005/attendance", todayAttendance)
      .then((res) => {
        console.log(res.data);
      });
  };

  const studentPresent = (id) => {
    setState({
      students: state.students.map((student) => {
        if (student.id === id) {
          student.present = !student.present;
        }

        return student;
      }),
    });
  };
  return (
    <>
      <Header />
      <table>
        <tr>
          <th>Student ID</th>
          <th className="nameCol">Student Name</th>
          <th className="switchCol">Attendance</th>
        </tr>
      </table>
      {state.students && (
        <Class students={state.students} studentPresent={studentPresent} />
      )}
      <Button variant="contained" color="primary" onClick={getAttendance}>
        Save Record
      </Button>
    </>
  );
};

export default TabularData;
