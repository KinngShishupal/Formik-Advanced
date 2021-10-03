import { all } from "redux-saga/effects";
import { fetchTeacher } from "./teacherSaga";
import { fetchClass } from "./classSaga";

export function* rootSaga() {
  yield all([fetchTeacher(), fetchClass()]);
}
