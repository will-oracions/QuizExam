import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@mui/material";

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const handleFormSubmit: SubmitHandler<{ text: string }> = (data) => {
    onSubmit(data.text);
    reset();
  };

  return (
    <div style={{ minWidth: "400px" }}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          fullWidth
          variant="outlined"
          label="Task"
          {...register("text", { required: true })}
        />
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
