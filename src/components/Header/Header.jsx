import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import logo from "../../img/logo.png";
import "./Header.css";

export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <header style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="headerContent">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="TheBlaiseCode Logo" />
            </a>
          </div>

          <div className="theme">
            <button onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
