import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  fetchClass: ["classId"],
  getClass: ["data"],
});

export const classAction = Creators;

const INITIAL_STATE = {
  class: [],
};

const getClass = (state, action) => {
  return {
    ...state,
    class: action.data,
  };
};

const HANDLERS = {
  [Types.GET_CLASS]: getClass,
};

const classReducer = createReducer(INITIAL_STATE, HANDLERS);

export default classReducer;
