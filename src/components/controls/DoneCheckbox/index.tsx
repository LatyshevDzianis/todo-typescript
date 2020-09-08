import React from "react";
import {Checkbox} from '@material-ui/core';

interface DoneCheckBoxProps {
  done: boolean;
  handleToggleDone: () => void;
}

const DoneCheckBox = (props: DoneCheckBoxProps) => {
  return (
    <Checkbox
      color="primary"
      inputProps={{ "aria-label": "secondary checkbox" }}
      checked={props.done}
      onChange={props.handleToggleDone}
    />
  );
};

export default DoneCheckBox;
