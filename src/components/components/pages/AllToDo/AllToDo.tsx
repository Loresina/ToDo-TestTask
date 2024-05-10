import { useAppSelector } from "../../../../hooks";
import { ToDoList } from "../../../templates/ToDoList";

export const AllToDo = (): React.JSX.Element => {
  const renderList = useAppSelector((state) => state.toDo.toDoList);
  return renderList.length === 0 ? (
    <ToDoList type="planned" />
  ) : (
    <ToDoList type="all" />
  );
};
