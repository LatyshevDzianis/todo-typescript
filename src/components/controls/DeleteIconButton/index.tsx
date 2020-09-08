import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

interface DeleteIconButtonProps {
  onDeleteClick: () => void;
}

const DeleteIconButton = (props: DeleteIconButtonProps) => {
  return (
    <IconButton onClick={props.onDeleteClick}>
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteIconButton;
