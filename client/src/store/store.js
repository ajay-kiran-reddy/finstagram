import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { authSlice } from "../components/auth/slice";
import rootSaga from "./rootSaga";
import { globalSlice } from "../components/shared/slice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  global: globalSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export { store };
