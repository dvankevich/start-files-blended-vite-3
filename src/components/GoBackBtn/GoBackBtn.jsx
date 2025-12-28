import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      {children}
    </Link>
  );
};

export default GoBackBtn;
