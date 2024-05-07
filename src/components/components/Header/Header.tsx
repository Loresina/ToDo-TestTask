import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import styles from "./Header.module.css";
import { useAppDispatch } from "../../../hooks";
import { addTask } from "../../../store/toDoSlice";
import { TypographyHeader, InputText } from "../../UI";

interface ToDoForm {
  task: string;
}

export const Header = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ToDoForm>({
    defaultValues: {
      task: "",
    },
  });

  const submit: SubmitHandler<ToDoForm> = async (data): Promise<void> => {
    dispatch(addTask({ task: data.task, id: uuidv4(), active: true }));
    reset({ task: "" });
  };

  return (
    <header className={styles.header}>
      <TypographyHeader variant="h1">todos</TypographyHeader>

      <form onSubmit={handleSubmit(submit)}>
        <Controller
          name="task"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="What needs to be done?"
              error={!!errors.task}
              helperText={errors.task ? "This field is required" : null}
              placeholder="add task"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </form>
    </header>
  );
};
