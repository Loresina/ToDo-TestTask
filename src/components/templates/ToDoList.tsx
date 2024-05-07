import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import List from "@mui/material/List";

import styles from "./ToDoList.module.css";
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

export const ToDoList = ({
  type,
}: {
  type: ListKeyType;
}): React.JSX.Element => {
  const renderList = useAppSelector((state) => state.toDo.toDoList);
  const dispatch = useAppDispatch();

  if (renderList.length === 0) {
    return (
      <main className={styles.todo}>
        <h2>Пока нет {listType[type]} дел.</h2>
        <List className={styles.list} />
      </main>
    );
  }

  const turnTask = (item: {
    task: string;
    id: string;
    active: boolean;
  }): void => {
    dispatch(setActive({ task: item.task, id: item.id, active: !item.active }));
  };

  return (
    <main className={styles.todo}>
      <h2>Список {listType[type]} дел.</h2>
      <List className={styles.list}>
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
          .reverse()
          .map((item) => (
            <li key={item.id}>
              <Checkbox
                icon={<RadioButtonUnchecked />}
                checkedIcon={<CheckCircle />}
                id={item.task}
                checked={!item.active}
                onChange={() => {
                  turnTask(item);
                }}
              />
              <label htmlFor={item.task}>{item.task}</label>
            </li>
          ))}
      </List>
    </main>
  );
};
