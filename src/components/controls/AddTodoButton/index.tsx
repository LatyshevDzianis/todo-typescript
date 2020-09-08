import React from "react";
import { Button } from "@material-ui/core";

interface AddTodoButtonProps {
  variant: "text" | "outlined" | "contained" | undefined;
  color: "inherit" | "primary" | "secondary" | "default" | undefined;
  size?: "small" | "medium" | "large" | undefined;
  fullWidth?: boolean;
  style?: string;
  onClick?: () => void;
  text: string;
}

const AddTodoButton = (props: AddTodoButtonProps) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      size={props.size}
      fullWidth={props.fullWidth}
      className={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default AddTodoButton;
