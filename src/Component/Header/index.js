import logo from "./../../logo.svg";
import "./style.css";
const Header = (props) => {
  const { pageName } = props;
  return (
    <div className="header-section">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
