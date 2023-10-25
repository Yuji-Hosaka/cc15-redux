import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";

const store = configureStore({
  reducer: {
    // ชื่อ Store รู้จัก
    note1: noteReducer,
    // auth: authReducer
    // cart: cartReducer
  },
});

export default store;
