import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
} from "../constants/actionTypes";
import { Todo } from "./todoState";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | ToggleDoneAction;
