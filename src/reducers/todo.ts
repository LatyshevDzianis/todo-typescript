import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_DONE,
} from "../constants/actionTypes";
import { TodoState } from "../types/todoState";
import { TodoActionTypes } from "../types/actions";

const initialState: TodoState = {
  todos: [],
};

const reducer = (state: TodoState = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
      };
    }
    case REMOVE_TODO: {
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    }
    case EDIT_TODO: {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          return todo;
        }),
      };
    }
    case TOGGLE_DONE: {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
