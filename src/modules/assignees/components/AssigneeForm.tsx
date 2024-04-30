import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField } from "@mui/material";

interface AssigneeFormProps {
  onSubmit: (text: string) => void;
}

export default function AssigneeForm({ onSubmit }: AssigneeFormProps) {
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const handleFormSubmit: SubmitHandler<{ text: string }> = (data) => {
    onSubmit(data.text);
    reset();
  };

  return (
    <div style={{ minWidth: "400px" }}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="name"
            {...register("text", {
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
            variant="outlined"
            label="email"
            {...register("text", { required: true })}
          />
        </Box>

        <Box marginBottom={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="phone"
            {...register("text", { required: true })}
          />
        </Box>

        {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}>
        Add Task
      </Button> */}
      </form>
    </div>
  );
}
