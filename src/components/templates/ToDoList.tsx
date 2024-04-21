import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActive } from "../../store/toDoSlice";

interface ListType {
  active: string;
  completed: string;
  all: string;
}

type ListKeyType = keyof ListType;

const listType: ListType = {
  active: "активных",
  completed: "выполненных",
  all: "запланированных",
};

// const renderAll = () => {
//   return
// }

export const ToDoList = ({
  type,
}: {
  type: ListKeyType;
}): React.JSX.Element => {
  const renderList = useAppSelector((state) => state.toDo.toDoList);
  const dispatch = useAppDispatch();

  console.log("renderList", renderList, type);

  if (renderList.length === 0) {
    return (
      <main>
        <h2>Пока нет {listType[type]} дел.</h2>
      </main>
    );
  }

  const turnTask = (item: { task: string; active: boolean }): void => {
    dispatch(setActive({ task: item.task, active: !item.active }));
  };

  return (
    <main>
      <h2>Список {listType[type]} дел.</h2>
      <ul>
        {renderList
          .filter((item) => {
            switch (type) {
              case "active":
                return item.active;
              case "completed":
                return !item.active;
              default:
                return item;
            }
          })
          .map((item) => (
            <li key={item.task}>
              <input
                id={item.task}
                type="checkbox"
                defaultChecked={item.active}
                onChange={() => {
                  turnTask(item);
                }}
              />
              <label htmlFor={item.task}>{item.task}</label>
            </li>
          ))}
      </ul>
    </main>
  );
};
