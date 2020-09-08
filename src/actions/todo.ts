import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_DONE,
} from "../constants/actionTypes";
import { TodoActionTypes } from "../types/actions";

export const addTodo = (text: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const removeTodo = (id: number): TodoActionTypes => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const editTodo = (
  id: number,
  text: string,
  done: boolean
): TodoActionTypes => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      text,
      done,
    },
  };
};

export const toggleDone = (id: number): TodoActionTypes => {
  return {
    type: TOGGLE_DONE,
    payload: id,
  };
};
