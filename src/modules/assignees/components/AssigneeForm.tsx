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
import { Assignee, AssigneeGenderEnum } from "../models/Assignee";

interface Props {
  onSubmit: (data: Partial<Assignee>) => void;
  errorMessage?: string;
  defaultValue?: Assignee | null;
}

const AssigneeForm = forwardRef(
  ({ onSubmit, errorMessage, defaultValue }: Props, ref) => {
    const {
      register,
      handleSubmit,
      reset,
      // setValue,
      formState: { errors },
    } = useForm<Partial<Assignee>>({
      defaultValues: { ...defaultValue, gender: AssigneeGenderEnum.MAN } || {},
    });

    const [gender, setGender] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setGender(event.target.value);
      console.log("Value: ", event.target.value);
    };

    // console.log(defaultValue);

    React.useEffect(() => {
      defaultValue?.gender && setGender(defaultValue.gender);
    }, [defaultValue?.gender]);

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

    const handleFormSubmit: SubmitHandler<Partial<Assignee>> = (data) => {
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

          <FormControl fullWidth error={Boolean(errors.gender)}>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Le genre est requis.",
                },
              })} // Enregistrer le champ avec React Hook Form
              label="Gender"
              value={gender || ""} // Utiliser watch pour obtenir la valeur actuelle et gérer le contrôle
              onChange={handleChange} // Gérer le changement de valeur
            >
              <MenuItem value={AssigneeGenderEnum.MAN}>Man</MenuItem>
              <MenuItem value={AssigneeGenderEnum.WOMEN}>Woman</MenuItem>
            </Select>
            {errors.gender && (
              <FormHelperText>{errors.gender.message}</FormHelperText>
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

export default AssigneeForm;
