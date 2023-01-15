import { useState } from "react";
import "./style.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = props;
  const handleInput = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <div className="well">
      <h2>Sign In</h2>
      <form className="material-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            onChange={handleInput}
            autoComplete="false"
          />
          <label>Email</label>
          <span className="input-border"></span>
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleInput}
            className="form-control"
            autoComplete="false"
          />
          <label>Password</label>
          <span className="input-border"></span>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => handleLogin(email, password)}
        >
          Submit
        </button>
        {/* <p class="helper-text">
          Don't have an account? <a href="#">Sign up</a> here.
        </p> */}
      </form>
    </div>
  );
};

export default Login;
