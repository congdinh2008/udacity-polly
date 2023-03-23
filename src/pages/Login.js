import { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // call your API to authenticate user
    // assuming the API returns a user object with an id and name property
    navigate("/");
  };

  return (
    <section className="form-section login-section d-flex align-items-center">
      <div className="form-container login-container text-center">
        <div className="form-header">
          <h1>Udacity Polly</h1>
          <FaPoll />
        </div>
        <div className="form login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group d-flex flex-column">
              <label htmlFor="username" className="form-control-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label htmlFor="password" className="form-control-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
