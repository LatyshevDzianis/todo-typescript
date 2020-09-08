import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import { Todo, RootState } from "../../../types/todoState";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <Box m={3}>
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </Box>
  );
};

export default TodoList;
