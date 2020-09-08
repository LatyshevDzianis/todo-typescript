import React, { MouseEvent, useState, ChangeEvent } from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { TodoInput } from "../../../types/todoInput";
import { addTodo } from "../../../actions/todo";

const useStyles = makeStyles({
  button: {
    height: "100%",
  },
});

const InputTodoArea = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState<TodoInput>({
    text: "",
  });

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoInput({ text: event.target.value });
  };

  const handleAddClick = (event: MouseEvent): void => {
    if (todoInput.text.trim()) {
      dispatch(addTodo(todoInput.text.trim()));
      setTodoInput({
        text: "",
      });
    }
  };

  return (
    <Box m={3}>
      <Grid container spacing={2}>
        <Grid item md={9}>
          <TextField
            label="Add your todo..."
            variant="outlined"
            fullWidth={true}
            onChange={onInputChange}
            value={todoInput.text}
          />
        </Grid>
        <Grid item md={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            className={classes.button}
            onClick={handleAddClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputTodoArea;
