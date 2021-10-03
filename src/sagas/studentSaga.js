import { call, put, takeLatest } from "redux-saga/effects";
import { studentAction, Types } from "../reducers/teacherReducer";
import axios from "axios";
import { studentApi } from "../Api";

export function* fetchStudent() {
  try {
    yield takeLatest(Types.FETCH_STUDENT, getStudent);
  } catch (error) {
    console.log(error.message);
  }
}

export function* getStudent(action) {
  try {
    const { data } = yield call(
      obtainStudent,
      `${studentApi}/${action.teacherId}`
    );
    yield put(studentAction.getStudent(data));
  } catch (error) {
    console.log(error.message);
  }
}

const obtainStudent = (api) => {
  console.log("++++", api);
  return axios.get(api);
};
