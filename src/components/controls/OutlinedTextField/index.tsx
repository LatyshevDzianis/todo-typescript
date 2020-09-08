import React, { ChangeEvent } from "react";
import { TextField } from "@material-ui/core";

interface OutlinedTextFieldProps {
  style?: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPress?: (event: any) => void;
  size?: undefined | "small" | "medium";
  label: string;
  fullWidth?: boolean; 
}

const OutlinedTextField = (props: OutlinedTextFieldProps) => {
  return (
    <TextField
      className={props.style}
      size={props.size}
      label={props.label}
      variant="outlined"
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.handleEnterPress}
      fullWidth={props.fullWidth}
    />
  );
};

export default OutlinedTextField;
