import { call, put, select, takeEvery } from "redux-saga/effects";
import { auth, authSlice } from "./slice";
import { postSignIn, postSignUp } from "./service";
import { globalSlice } from "../shared/slice";

function* actionHandleSignUp() {
  try {
    const state = yield select(auth);
    const signUpData = state.signUpData;
    const data = yield call(postSignUp, signUpData);
    yield put(
      globalSlice.actions.storeMessage({
        message: data?.message,
        status: "positive",
      })
    );
    yield put(authSlice.actions.updateLoading(false));
  } catch (e) {
    console.log(e);
    const error = { ...e };
    console.log(error, "[error]");
    yield put(
      globalSlice.actions.storeMessage({
        message: error?.response?.data?.message,
        status: "error",
      })
    );
    yield put(authSlice.actions.updateLoading(false));
  }
}

function* actionHandleSignIn() {
  try {
    const state = yield select(auth);
    const signInData = state.signInData;
    const data = yield call(postSignIn, signInData);
    localStorage.setItem("userInfo", JSON.stringify(data));
    yield put(
      globalSlice.actions.storeMessage({
        message: data?.message,
        status: "positive",
      })
    );
    yield put(authSlice.actions.updateLoading(false));
  } catch (e) {
    console.log(e);
    const error = { ...e };
    console.log(error, "[error]");
    yield put(
      globalSlice.actions.storeMessage({
        message: error?.response?.data?.message,
        status: "error",
      })
    );
    yield put(authSlice.actions.updateLoading(false));
  }
}

function* signUpUser() {
  yield takeEvery(authSlice.actions.storeSignUpData, actionHandleSignUp);
}

function* signInUser() {
  yield takeEvery(authSlice.actions.storeSignInData, actionHandleSignIn);
}

export { signUpUser, signInUser };
