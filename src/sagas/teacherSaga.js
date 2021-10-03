import { call, put, takeLatest } from "redux-saga/effects";
import { teacherAction, Types } from "../reducers/teacherReducer";
import axios from "axios";
import { teacherApi } from "../Api";

export function* fetchTeacher() {
  try {
    yield takeLatest(Types.FETCH_TEACHER, getTeacher);
  } catch (error) {
    console.log(error.message);
  }
}

export function* getTeacher(action) {
  try {
    const { data } = yield call(
      obtainTeacher,
      `${teacherApi}/${action.teacherId}`
    );
    yield put(teacherAction.getTeacher(data));
  } catch (error) {
    console.log(error.message);
  }
}

const obtainTeacher = (api) => {
  return axios.get(api);
};
