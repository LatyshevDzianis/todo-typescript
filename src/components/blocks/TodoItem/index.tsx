import React, { MouseEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  Checkbox,
  Typography,
  Grid,
  IconButton,
  Popover,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

import { Todo } from "../../../types/todoState";
import { removeTodo, toggleDone, editTodo } from "../../../actions/todo";

interface TodoItemProps {
  todo: Todo;
}

const useStyles = makeStyles({
  root: {
    marginBottom: 15,
    padding: "5px 10px",
  },
  input: {
    margin: "5px 10px",
    minWidth: 300,
  },
});

const TodoItem = (props: TodoItemProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [popoverInput, setPopoverInput] = useState(props.todo.text);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onDeleteClick = (event: MouseEvent) => {
    dispatch(removeTodo(props.todo.id));
  };

  const handleToggleDone = (event: ChangeEvent) => {
    dispatch(toggleDone(props.todo.id));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPopoverInput(event.target.value);
  };

  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      if (popoverInput.trim()) {
        dispatch(editTodo(props.todo.id, popoverInput, props.todo.done));
        setAnchorEl(null);
      }
    }
  };

  return (
    <Paper elevation={5} square={true} className={classes.root}>
      <Grid container alignItems="center">
        <Grid item sm={1}>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={props.todo.done}
            onChange={handleToggleDone}
          />
        </Grid>
        <Grid item sm={9}>
          <Typography
            style={{
              textDecoration: props.todo.done ? "line-through" : "none",
            }}
          >
            {props.todo.text}
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <div>
            <IconButton onClick={handleClick}>
              <EditIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <TextField
                className={classes.input}
                size="small"
                label="Change todo"
                variant="outlined"
                value={popoverInput}
                onChange={handleInputChange}
                onKeyPress={handleEnterPress}
              />
            </Popover>
            <IconButton onClick={onDeleteClick}>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoItem;
