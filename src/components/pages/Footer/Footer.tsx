import { Link } from "react-router-dom";

export const Footer = (): React.JSX.Element => {
  return (
    <footer>
      <span>count to do</span>

      <nav className="footer-nav">
        <Link to="/" type="button">
          All
        </Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
        <button type="button">Clear completed</button>
      </nav>
    </footer>
  );
};
