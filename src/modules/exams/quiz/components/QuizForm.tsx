import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
import { Quiz, QuizDifficulty, QuizLevel } from "../models/Quiz";
import { useTranslation } from "react-i18next";
import { toCalendarDate } from "../../../../utils";

interface Props {
  onSubmit: (data: Partial<Quiz>) => void;
  errorMessage?: string;
  defaultValue?: Quiz | null;
}

const QuizForm = forwardRef(
  ({ onSubmit, errorMessage, defaultValue }: Props, ref) => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery("(max-width:1400px)");

    const today = toCalendarDate(new Date());

    const {
      register,
      handleSubmit,
      reset,
      // setValue,
      control,
      formState: { errors },
    } = useForm<Partial<Quiz>>({
      defaultValues: { ...defaultValue } || {},
    });

    /**
     * State to manage the input concepts
     */
    const [concepts, setConcepts] = React.useState("");

    /**
     * Handler for the concepts input
     * @param event
     */
    const handleChange = (event: SelectChangeEvent) => {
      setConcepts(event.target.value);
      console.log("Value: ", event.target.value);
    };

    /**
     * State to manage the input difficulty
     */
    const [difficulty, setDifficulty] = React.useState("");

    /**
     * Handler for the difficulty input
     * @param event
     */
    const handleChangeDifficulty = (event: SelectChangeEvent) => {
      setDifficulty(event.target.value);
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

    const handleFormSubmit: SubmitHandler<Partial<Quiz>> = (data) => {
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
          {/* Quiz name field */}
          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              variant="outlined"
              label={t("quizs.quizForm.nameField.label")}
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: t("quizs.quizForm.nameField.validation.required"),
                },
                minLength: {
                  value: 3,
                  message: t(
                    "quizs.quizForm.nameField.validation.min3characters"
                  ),
                },
              })}
              error={Boolean(errors.name)}
              helperText={errors.name ? errors.name.message : ""}
            />
          </Box>

          {/* Quiz description field */}

          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              type="description"
              variant="outlined"
              multiline
              rows={4}
              label={t("quizs.quizForm.descriptionField.label")}
              {...register("description", {
                required: {
                  value: true,
                  message: t(
                    "quizs.quizForm.descriptionField.validation.required"
                  ),
                },
              })}
              error={Boolean(errors.description)}
              helperText={errors.description ? errors.description.message : ""}
            />
          </Box>

          <Box marginBottom={2}>
            <Controller
              name="date"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  label={t("quizs.quizForm.dateField.label")}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={!!errors.date}
                  helperText={errors.date ? errors.date.message : ""}
                  inputProps={{ min: today }}
                />
              )}
            />
          </Box>

          {/* Quiz teacher field */}

          {/* Quiz concepts field */}
          <Box marginBottom={2}>
            <FormControl fullWidth error={Boolean(errors.concepts)}>
              <InputLabel
                id="concepts-select-label"
                // @ts-ignore
                size={isSmallScreen ? "small" : "medium"}>
                {t("quizs.quizForm.conceptsField.label")}
              </InputLabel>
              <Select
                size={isSmallScreen ? "small" : "medium"}
                labelId="concepts-select-label"
                id="concepts-select"
                {...register("concepts", {
                  required: {
                    value: true,
                    message: t(
                      "quizs.quizForm.conceptsField.validation.required"
                    ),
                  },
                })}
                label="Concepts"
                value={concepts || ""}
                onChange={handleChange}>
                <MenuItem value={QuizLevel.L1}>L1</MenuItem>
                <MenuItem value={QuizLevel.L2}>L2</MenuItem>
                <MenuItem value={QuizLevel.L3}>L3</MenuItem>
              </Select>
              {errors.concepts && (
                <FormHelperText>{errors.concepts.message}</FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box marginBottom={2}>
            <FormControl fullWidth error={Boolean(errors.difficulty)}>
              <InputLabel
                id="difficulty-select-label"
                // @ts-ignore
                size={isSmallScreen ? "small" : "medium"}>
                {t("quizs.quizForm.difficultyField.label")}
              </InputLabel>
              <Select
                size={isSmallScreen ? "small" : "medium"}
                labelId="difficulty-select-label"
                id="difficulty-select"
                {...register("difficulty", {
                  required: {
                    value: true,
                    message: t(
                      "quizs.quizForm.difficultyField.validation.required"
                    ),
                  },
                })}
                label="diffuculty"
                value={difficulty || ""}
                onChange={handleChangeDifficulty}>
                <MenuItem value={QuizDifficulty.LOW}>
                  {" "}
                  {t("quiz.difficulty.low")}
                </MenuItem>
                <MenuItem value={QuizDifficulty.MEDIUM}>
                  {t("quiz.difficulty.medium")}
                </MenuItem>
                <MenuItem value={QuizDifficulty.HARD}>
                  {t("quiz.difficulty.hard")}
                </MenuItem>
              </Select>
              {errors.difficulty && (
                <FormHelperText>{errors.difficulty.message}</FormHelperText>
              )}
            </FormControl>
          </Box>

          {/* <Box>
            <FormControl fullWidth error={Boolean(errors.concepts)}>
              <InputLabel id="demo-simple-select-label">Concepts</InputLabel>
              <Select
                label="Concepts"
                {...register("concepts", {
                  required: {
                    value: true,
                    message: "Le genre est requis.",
                  },
                })}
                error={Boolean(errors.concepts)}>
                <MenuItem value="0">Man</MenuItem>
                <MenuItem value="1">Woman</MenuItem>
              </Select>

              {errors.concepts && (
                <FormHelperText>{errors.concepts.message}</FormHelperText>
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

export default QuizForm;
