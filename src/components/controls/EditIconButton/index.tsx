import React, { MouseEvent } from "react";
import {IconButton} from '@material-ui/core';
import EditIcon from "@material-ui/icons/Edit";

interface EditIconButtonProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const EditIconButton = (props: EditIconButtonProps) => {
  return (
    <IconButton onClick={props.handleClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditIconButton;
