import { all } from "redux-saga/effects";
import { signInUser, signUpUser } from "../components/auth/saga";

export default function* rootSaga() {
  yield all([signUpUser(), signInUser()]);
}
