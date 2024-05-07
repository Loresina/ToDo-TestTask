import {
  RestartAlt,
  TaskAltSharp,
  ClearAllRounded,
  DeleteForeverRounded,
  FormatListBulletedRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { deleteCompleted } from "../../../store/toDoSlice";
import { Button, InfoChip } from "../../UI";

export const Footer = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const renderList = useAppSelector((state) => state.toDo.toDoList);

  const clearCompleted = (): void => {
    dispatch(deleteCompleted());
  };

  const navigateButton = (path: string): void => {
    navigate(path);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBorder}></div>
      <nav className={styles.footerItem}>
        <Button
          onClick={() => {
            navigateButton("/");
          }}
          endIcon={<ClearAllRounded />}
          className={styles.button}
        >
          All
        </Button>
        <Button
          onClick={() => {
            navigateButton("/active");
          }}
          endIcon={<RestartAlt />}
          className={styles.button}
        >
          Active
        </Button>
        <Button
          onClick={() => {
            navigateButton("/completed");
          }}
          endIcon={<TaskAltSharp />}
          className={styles.button}
        >
          Completed
        </Button>
      </nav>

      <div className={styles.footerItem}>
        <InfoChip
          icon={<FormatListBulletedRounded />}
          label={`total tasks ${renderList.length}`}
        />

        <Button
          onClick={() => {
            clearCompleted();
          }}
          endIcon={<DeleteForeverRounded />}
          className={styles.button}
        >
          Clear completed
        </Button>
      </div>
    </footer>
  );
};
