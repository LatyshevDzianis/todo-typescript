import React, { useState, ChangeEvent } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { addTodo } from "../../../actions/todo";
import OutlinedTextField from "../../controls/OutlinedTextField";
import AddTodoButton from "../../controls/AddTodoButton";

interface TodoInput {
  text: string
}

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

  const handleAddClick = (): void => {
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
          <OutlinedTextField
            label="Add your todo..."
            fullWidth={true}
            onChange={onInputChange}
            value={todoInput.text}
          />
        </Grid>
        <Grid item md={3}>
          <AddTodoButton 
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            style={classes.button}
            onClick={handleAddClick}
            text="Add"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputTodoArea;
