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
  useMediaQuery,
} from "@mui/material";
import React, { forwardRef } from "react";
import { Course, CourseLevel } from "../models/Course";
import { useTranslation } from "react-i18next";

interface Props {
  onSubmit: (data: Partial<Course>) => void;
  errorMessage?: string;
  defaultValue?: Course | null;
}

const CourseForm = forwardRef(
  ({ onSubmit, errorMessage, defaultValue }: Props, ref) => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery("(max-width:1400px)");

    const {
      register,
      handleSubmit,
      reset,
      // setValue,
      formState: { errors },
    } = useForm<Partial<Course>>({
      defaultValues: { ...defaultValue } || {},
    });

    /**
     * State to manage the input level
     */
    const [level, setGender] = React.useState("");

    /**
     * Handler for the level input
     * @param event
     */
    const handleChange = (event: SelectChangeEvent) => {
      setGender(event.target.value);
      console.log("Value: ", event.target.value);
    };

    // console.log(defaultValue);

    /**
     * Submit button ref
     * to handle the submission of the form from the parent
     * with useImperativeHandler hook
     */
    const submitBtnRef = React.useRef<HTMLButtonElement>(null);

    React.useImperativeHandle(ref, () => ({
      /**
       * Trigger the form submittion form the parent
       */
      triggerSubmit: () => {
        submitBtnRef.current?.click();
      },

      /**
       * Reset the form from the parent
       */
      resetForm: () => {
        reset();
      },
    }));

    const handleFormSubmit: SubmitHandler<Partial<Course>> = (data) => {
      onSubmit(data);
      // reset();
    };

    return (
      <div>
        {errorMessage && (
          <Box marginBottom={2}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

        <form className="app-form" onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Course name field */}
          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              variant="outlined"
              label={t("courses.courseForm.nameField.label")}
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: t(
                    "courses.courseForm.nameField.validation.required"
                  ),
                },
                minLength: {
                  value: 3,
                  message: t(
                    "courses.courseForm.nameField.validation.min3characters"
                  ),
                },
              })}
              error={Boolean(errors.name)}
              helperText={errors.name ? errors.name.message : ""}
            />
          </Box>

          {/* Course description field */}

          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              type="description"
              variant="outlined"
              multiline
              rows={4}
              label={t("courses.courseForm.descriptionField.label")}
              {...register("description", {
                required: {
                  value: true,
                  message: t(
                    "courses.courseForm.descriptionField.validation.required"
                  ),
                },
              })}
              error={Boolean(errors.description)}
              helperText={errors.description ? errors.description.message : ""}
            />
          </Box>

          {/* Course teacher field */}

          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              variant="outlined"
              label={t("courses.courseForm.teacherField.label")}
              {...register("teacher", {
                required: {
                  value: true,
                  message: t(
                    "courses.courseForm.teacherField.validation.required"
                  ),
                },
              })}
              error={Boolean(errors.teacher)}
              helperText={errors.teacher ? errors.teacher.message : ""}
            />
          </Box>

          {/* Course level field */}

          <FormControl fullWidth error={Boolean(errors.level)}>
            <InputLabel
              id="level-select-label"
              // @ts-ignore
              size={isSmallScreen ? "small" : "medium"}>
              {t("courses.courseForm.levelField.label")}
            </InputLabel>
            <Select
              size={isSmallScreen ? "small" : "medium"}
              labelId="level-select-label"
              id="level-select"
              {...register("level", {
                required: {
                  value: true,
                  message: t(
                    "courses.courseForm.levelField.validation.required"
                  ),
                },
              })}
              label="Gender"
              value={level || ""}
              onChange={handleChange}>
              <MenuItem value={CourseLevel.L1}>L1</MenuItem>
              <MenuItem value={CourseLevel.L2}>L2</MenuItem>
              <MenuItem value={CourseLevel.L3}>L3</MenuItem>
            </Select>
            {errors.level && (
              <FormHelperText>{errors.level.message}</FormHelperText>
            )}
          </FormControl>

          {/* <Box>
            <FormControl fullWidth error={Boolean(errors.level)}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                label="Gender"
                {...register("level", {
                  required: {
                    value: true,
                    message: "Le genre est requis.",
                  },
                })}
                error={Boolean(errors.level)}>
                <MenuItem value="0">Man</MenuItem>
                <MenuItem value="1">Woman</MenuItem>
              </Select>

              {errors.level && (
                <FormHelperText>{errors.level.message}</FormHelperText>
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

export default CourseForm;
