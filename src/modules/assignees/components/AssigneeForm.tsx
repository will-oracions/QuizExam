import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import { Assignee } from "../models/Assignee";

interface Props {
  onSubmit: (data: Partial<Assignee>) => void;
}

const AssigneeForm = forwardRef(({ onSubmit }: Props, ref) => {
  const { register, handleSubmit, reset } = useForm<Partial<Assignee>>();

  const submitBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      submitBtnRef.current?.click();
    },
    resetForm: () => {
      reset();
    },
  }));

  const handleFormSubmit: SubmitHandler<Partial<Assignee>> = (data) => {
    onSubmit(data);
    // reset();
  };

  return (
    <div style={{ minWidth: "400px" }}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="name"
            type="text"
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "Le nom doit avoir au moins 3 charactères",
              },
            })}
          />
        </Box>

        <Box marginBottom={2}>
          <TextField
            fullWidth
            type="email"
            variant="outlined"
            label="email"
            {...register("email", { required: true })}
          />
        </Box>

        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="phone"
            {...register("phone", { required: true })}
          />
        </Box>

        <Button
          ref={submitBtnRef}
          style={{ display: "none" }}
          type="submit"
          variant="contained"
          color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
});

export default AssigneeForm;
