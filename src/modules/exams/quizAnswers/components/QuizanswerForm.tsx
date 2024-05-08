import { Alert, Box, Button, TextField, useMediaQuery } from "@mui/material";
import React, { forwardRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Quizanswer } from "../models/Quizanswer";

interface Props {
  onSubmit: (data: Partial<Quizanswer>) => void;
  errorMessage?: string;
  defaultValue?: Quizanswer | null;
}

const QuizanswerForm = forwardRef(
  ({ onSubmit, errorMessage, defaultValue }: Props, ref) => {
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery("(max-width:1400px)");

    // const today = toCalendarDate(new Date());

    const {
      register,
      handleSubmit,
      reset,
      // setValue,
      // control,
      formState: { errors },
    } = useForm<Partial<Quizanswer>>({
      defaultValues: { ...defaultValue } || {},
    });

    /**
     * State to manage the input concepts
     */
    // const [concepts, setConcepts] = React.useState("");

    /**
     * Handler for the concepts input
     * @param event
     */
    // const handleChange = (event: SelectChangeEvent) => {
    //   setConcepts(event.target.value);
    //   console.log("Value: ", event.target.value);
    // };

    /**
     * State to manage the input difficulty
     */
    // const [difficulty, setDifficulty] = React.useState("");

    /**
     * Handler for the difficulty input
     * @param event
     */
    // const handleChangeDifficulty = (event: SelectChangeEvent) => {
    //   setDifficulty(event.target.value);
    //   console.log("Value: ", event.target.value);
    // };

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

    const handleFormSubmit: SubmitHandler<Partial<Quizanswer>> = (data) => {
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
          {/* Quizanswer name field */}
          <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              variant="outlined"
              label={t("quizAnswers.quizAnswerForm.answerTextField.label")}
              type="text"
              {...register("answerText", {
                required: {
                  value: true,
                  message: t(
                    "quizAnswers.quizAnswerForm.answerTextField.validation.required"
                  ),
                },
                minLength: {
                  value: 3,
                  message: t(
                    "quizAnswers.quizAnswerForm.answerTextField.validation.min3characters"
                  ),
                },
              })}
              error={Boolean(errors.answerText)}
              helperText={errors.answerText ? errors.answerText.message : ""}
            />
          </Box>

          {/* Quizanswer description field */}

          {/* <Box marginBottom={2}>
            <TextField
              fullWidth
              size={isSmallScreen ? "small" : "medium"}
              type="description"
              variant="outlined"
              multiline
              rows={4}
              label={t("quizAnswers.quizAnswerForm.descriptionField.label")}
              {...register("description", {
                required: {
                  value: true,
                  message: t(
                    "quizAnswers.quizAnswerForm.descriptionField.validation.required"
                  ),
                },
              })}
              error={Boolean(errors.description)}
              helperText={errors.description ? errors.description.message : ""}
            />
          </Box> */}

          {/* <Box marginBottom={2}>
            <Controller
              name="date"
              control={control}
              // defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  label={t("quizAnswers.quizAnswerForm.dateField.label")}
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
          </Box> */}

          {/* Quizanswer teacher field */}

          {/* Quizanswer concepts field */}
          {/* <Box marginBottom={2}>
            <FormControl fullWidth error={Boolean(errors.concepts)}>
              <InputLabel
                id="concepts-select-label"
                // @ts-ignore
                size={isSmallScreen ? "small" : "medium"}>
                {t("quizAnswers.quizAnswerForm.conceptsField.label")}
              </InputLabel>
              <Select
                size={isSmallScreen ? "small" : "medium"}
                labelId="concepts-select-label"
                id="concepts-select"
                {...register("concepts", {
                  required: {
                    value: true,
                    message: t(
                      "quizAnswers.quizAnswerForm.conceptsField.validation.required"
                    ),
                  },
                })}
                label="Concepts"
                value={concepts || ""}
                onChange={handleChange}>
                <MenuItem value={QuizanswerLevel.L1}>L1</MenuItem>
                <MenuItem value={QuizanswerLevel.L2}>L2</MenuItem>
                <MenuItem value={QuizanswerLevel.L3}>L3</MenuItem>
              </Select>
              {errors.concepts && (
                <FormHelperText>{errors.concepts.message}</FormHelperText>
              )}
            </FormControl>
          </Box> */}

          {/* <Box marginBottom={2}>
            <FormControl fullWidth error={Boolean(errors.difficulty)}>
              <InputLabel
                id="difficulty-select-label"
                // @ts-ignore
                size={isSmallScreen ? "small" : "medium"}>
                {t("quizAnswers.quizAnswerForm.difficultyField.label")}
              </InputLabel>
              <Select
                size={isSmallScreen ? "small" : "medium"}
                labelId="difficulty-select-label"
                id="difficulty-select"
                {...register("difficulty", {
                  required: {
                    value: true,
                    message: t(
                      "quizAnswers.quizAnswerForm.difficultyField.validation.required"
                    ),
                  },
                })}
                label="diffuculty"
                value={difficulty || ""}
                onChange={handleChangeDifficulty}>
                <MenuItem value={QuizanswerDifficulty.LOW}>
                  {" "}
                  {t("quizAnswers.difficulty.low")}
                </MenuItem>
                <MenuItem value={QuizanswerDifficulty.MEDIUM}>
                  {t("quizAnswers.difficulty.medium")}
                </MenuItem>
                <MenuItem value={QuizanswerDifficulty.HARD}>
                  {t("quizAnswers.difficulty.hard")}
                </MenuItem>
              </Select>
              {errors.difficulty && (
                <FormHelperText>{errors.difficulty.message}</FormHelperText>
              )}
            </FormControl>
          </Box> */}

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

export default QuizanswerForm;
