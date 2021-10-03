import React from "react";
import ClassBar from "./classBar";
import Home from "./Home";
import AddTeacher from "./AddTeacher/TeacherForm";

const Principal = () => {
  return (
    <div>
      <Home />
      <AddTeacher />
      {/* <ClassBar /> */}
    </div>
  );
};

export default Principal;
