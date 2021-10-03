import React from "react";
import TeacherDetails from "./TeacherDetails";
import styled from "styled-components";
import TeacherClass from "./TeacherClass";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { teacherAction } from "../../reducers/teacherReducer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  const { teacherId } = useParams();
  const dispatch = useDispatch();
  const teacher = useSelector((state) => state.teacherReducer.teacher[0]);
  useEffect(() => {
    dispatch(teacherAction.fetchTeacher(teacherId));
  }, []);
  return (
    <Wrapper>
      <TeacherDetails teacher={teacher} />
      <TeacherClass teacher={teacher} />
    </Wrapper>
  );
};

export default Index;
