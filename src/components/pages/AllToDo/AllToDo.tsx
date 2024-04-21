import { useAppSelector } from "../../../hooks";
import { ToDoList } from "../../templates/ToDoList";

export const AllToDo = (): React.JSX.Element => {
  const renderList = useAppSelector((state) => state.toDo.toDoList);

  console.log("renderList", renderList);

  return <ToDoList title="запланированных" />;
};
