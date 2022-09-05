import React from "react";
import {configureStore} from "@reduxjs/toolkit";
// импорт слайсов
// Пример import todoReducer from "./todoSlice";
import testTodo from "./testTodo";

export default configureStore({
  reducer:{
    todos:testTodo,
  }
})
