import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchTeacher: ["teacherId"],
  getTeacher: ["data"],
});

export const teacherAction = Creators;

const INITIAL_STATE = {
  teacher: [],
};

const getTeacher = (state, action) => {
  return {
    ...state,
    teacher: action.data,
  };
};

const HANDLERS = {
  [Types.GET_TEACHER]: getTeacher,
};

const teacherReducer = createReducer(INITIAL_STATE, HANDLERS);

export default teacherReducer;
