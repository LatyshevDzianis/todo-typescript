import React, { MouseEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  Grid,
  Popover,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Todo } from "../../../../../types/todoState";
import { removeTodo, toggleDone, editTodo } from "../../../../../actions/todo";
import DoneCheckBox from "../../../../controls/DoneCheckbox";
import DeleteIconButton from '../../../../controls/DeleteIconButton';
import EditIconButton from '../../../../controls/EditIconButton';
import OutlinedTextField from "../../../../controls/OutlinedTextField";

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

  const onDeleteClick = () => {
    dispatch(removeTodo(props.todo.id));
  };

  const handleToggleDone = () => {
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
          <DoneCheckBox done={props.todo.done} handleToggleDone={handleToggleDone}/>
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
            <EditIconButton handleClick={handleClick}/>
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
              <OutlinedTextField
                style={classes.input}
                value={popoverInput}
                handleEnterPress={handleEnterPress}
                onChange={handleInputChange}
                size="small"
                label="Edit todo..."
              />
            </Popover>
            <DeleteIconButton onDeleteClick={onDeleteClick}/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoItem;
