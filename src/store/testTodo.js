// прочитать как вынести useState со строкой типа [value,setValue]=uss('')
import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const testTodo = createSlice({
  name: 'pageUseState',
  initialState: {
    todos: []
  },

  reducers: {
    addTodo(state, action) {
      state.todos.push({
          id: Date.now(),
          title: action.payload.value,
          completed: false
        },
      )
    },
    removeTask(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    changeTask(state, action) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
  }
})

export const {addTodo, removeTask, changeTask} = testTodo.actions

export default testTodo.reducer
