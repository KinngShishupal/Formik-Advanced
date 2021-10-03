import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import TeacherSubject from "./TeacherSubject";

const TeacherSubjects = () => {
  const location = useLocation();
  const [sub, setState] = useState(location.state.item.subjects);
  return (
    <>
      {sub.map((item) => {
        return (
          <Box key={item._id}>
            <TeacherSubject item={item} />
          </Box>
        );
      })}
    </>
  );
};

export default TeacherSubjects;
