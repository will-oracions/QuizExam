import { useForm, SubmitHandler } from "react-hook-form";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { forwardRef } from "react";
import { Todo, TodoPriorityEnum } from "../models/Todo";

interface Props {
  onSubmit: (data: Partial<Todo>) => void;
  errorMessage?: string;
  defaultValue?: Todo | null;
}

const TodoForm = forwardRef(
  ({ onSubmit, errorMessage, defaultValue }: Props, ref) => {
    const {
      register,
      handleSubmit,
      reset,
      // setValue,
      formState: { errors },
    } = useForm<Partial<Todo>>({
      defaultValues: { ...defaultValue } || {},
    });

    const [gender, setGender] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setGender(event.target.value);
      console.log("Value: ", event.target.value);
    };

    // console.log(defaultValue);

    // React.useEffect(() => {
    //   defaultValue?.gender && setGender(defaultValue.gender);
    // }, [defaultValue?.gender]);

    const submitBtnRef = React.useRef<HTMLButtonElement>(null);

    // React.useEffect(() => {
    //   const values = defaultValue;
    //   delete values?.id;
    //   for (const key in values) {
    //     setValue(key, values[key]);
    //   }
    // }, [defaultValue]);

    React.useImperativeHandle(ref, () => ({
      triggerSubmit: () => {
        submitBtnRef.current?.click();
      },
      resetForm: () => {
        reset();
      },
    }));

    const handleFormSubmit: SubmitHandler<Partial<Todo>> = (data) => {
      onSubmit(data);
      // reset();
    };

    return (
      <div style={{ minWidth: "400px" }}>
        {errorMessage && (
          <Box marginBottom={2}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Box marginBottom={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="title"
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Le titre est requis.",
                },
                minLength: {
                  value: 3,
                  message: "Le titre doit avoir au moins 3 charactères",
                },
              })}
              error={Boolean(errors.title)}
              helperText={errors.title ? errors.title.message : ""}
            />
          </Box>

          <Box marginBottom={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="description"
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "La description est requis.",
                },
                minLength: {
                  value: 3,
                  message: "La description doit avoir au moins 3 charactères",
                },
              })}
              error={Boolean(errors.description)}
              helperText={errors.description ? errors.description.message : ""}
            />
          </Box>

          <FormControl fullWidth error={Boolean(errors.prority)}>
            <InputLabel id="prority-select-label">prority</InputLabel>
            <Select
              labelId="prority-select-label"
              id="prority-select"
              {...register("prority", {
                required: {
                  value: true,
                  message: "Le genre est requis.",
                },
              })} // Enregistrer le champ avec React Hook Form
              label="prority"
              value={gender || ""} // Utiliser watch pour obtenir la valeur actuelle et gérer le contrôle
              onChange={handleChange} // Gérer le changement de valeur
            >
              <MenuItem value={TodoPriorityEnum.LOW}>Low</MenuItem>
              <MenuItem value={TodoPriorityEnum.MEDIUM}>Medium</MenuItem>
              <MenuItem value={TodoPriorityEnum.HIGHT}>Hight</MenuItem>
            </Select>
            {errors.prority && (
              <FormHelperText>{errors.prority.message}</FormHelperText>
            )}
          </FormControl>

          {/* <Box>
            <FormControl fullWidth error={Boolean(errors.gender)}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                label="Gender"
                {...register("gender", {
                  required: {
                    value: true,
                    message: "Le genre est requis.",
                  },
                })}
                error={Boolean(errors.gender)}>
                <MenuItem value="0">Man</MenuItem>
                <MenuItem value="1">Woman</MenuItem>
              </Select>

              {errors.gender && (
                <FormHelperText>{errors.gender.message}</FormHelperText>
              )}
            </FormControl>
          </Box> */}

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
  }
);

export default TodoForm;
