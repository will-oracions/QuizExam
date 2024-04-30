import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Box, Button, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import { Assignee } from "../models/Assignee";

interface Props {
  onSubmit: (data: Partial<Assignee>) => void;
}

const AssigneeForm = forwardRef(({ onSubmit }: Props, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<Assignee>>();

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
      <Box marginBottom={2}>
        <Alert severity="error">This is an error Alert.</Alert>
      </Box>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Le nom est requis.",
              },
              minLength: {
                value: 3,
                message: "Le nom doit avoir au moins 3 charactères",
              },
            })}
            error={Boolean(errors.name)}
            helperText={errors.name ? errors.name.message : ""}
          />
        </Box>

        <Box marginBottom={2}>
          <TextField
            fullWidth
            type="email"
            variant="outlined"
            label="email"
            {...register("email", {
              required: {
                value: true,
                message: "Le email est requis.",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ""}
          />
        </Box>

        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Le Numéro de téléphone est requis.",
              },
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone ? errors.phone.message : ""}
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
