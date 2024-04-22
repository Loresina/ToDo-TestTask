import { Link } from "react-router-dom";

import { useAppDispatch } from "../../../hooks";
import { deleteCompleted } from "../../../store/toDoSlice";

export const Footer = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const clearCompleted = (): void => {
    dispatch(deleteCompleted());
  };

  return (
    <footer>
      <span>count to do</span>

      <nav className="footer-nav">
        <Link to="/" type="button">
          All
        </Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
        <button
          type="button"
          onClick={() => {
            clearCompleted();
          }}
        >
          Clear completed
        </button>
      </nav>
    </footer>
  );
};
