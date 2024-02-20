import letters from "../modules/letterSlice";
import member from "../modules/memberSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "../modules/authSlice";

const rootReducer = combineReducers({
  letters,
  member,
  auth,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
