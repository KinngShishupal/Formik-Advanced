import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  //   fetchClass: ["classId"],
  getDate: ["date"],
});

export const dateAction = Creators;

const INITIAL_STATE = {
  date: new Date(),
};

const getDate = (state, action) => {
  return {
    ...state,
    date: action.date,
  };
};

const HANDLERS = {
  [Types.GET_DATE]: getDate,
};

const dateReducer = createReducer(INITIAL_STATE, HANDLERS);

export default dateReducer;
