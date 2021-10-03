import { combineReducers } from "redux";
import teacherReducer from "./teacherReducer";
import classReducer from "./classReducer";
import dateReducer from "./dateReducer";

const rootReducer = combineReducers({
  teacherReducer,
  classReducer,
  dateReducer,
});

export default rootReducer;
