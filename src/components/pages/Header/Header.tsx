import { useForm, type SubmitHandler } from "react-hook-form";

import { useAppDispatch } from "../../../hooks";
import { addTask } from "../../../store/toDoSlice";

interface ToDoForm {
  task: string;
}

export const Header = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ToDoForm>();

  const submit: SubmitHandler<ToDoForm> = async (data) => {
    dispatch(addTask({ task: data.task, active: true }));
    reset({ task: "" });
  };

  return (
    <header>
      <h1>todos</h1>

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="What heeds to be done?"
          {...register("task", { required: true })}
        />
        {errors.task !== undefined && <span>This field is required</span>}
      </form>
    </header>
  );
};
