import "./LoginNavigation.css";
import { Link } from "react-router-dom";

function LoginNavigation() {
  return (
    <nav className="loginnav">
      <div className="loginnav__list">
        <Link to="/signup" className="loginnav__signup">Регистрация</Link>
        <Link to="/signin" className="loginnav__signin">Войти</Link>
      </div>
    </nav>
  );
}

export default LoginNavigation;