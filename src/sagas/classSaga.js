import { call, put, takeLatest } from "redux-saga/effects";
import { classAction, Types } from "../reducers/classReducer";
import axios from "axios";
import { classApi } from "../Api";

export function* fetchClass() {
  try {
    yield takeLatest(Types.FETCH_CLASS, getClass);
  } catch (error) {
    console.log(error.message);
  }
}

export function* getClass(action) {
  try {
    const { data } = yield call(obtainClass, `${classApi}/${action.classId}`);
    yield put(classAction.getClass(data));
  } catch (error) {
    console.log(error.message);
  }
}

const obtainClass = (api) => {
  return axios.get(api);
};
