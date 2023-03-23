import { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/authedUser";
import { login } from "../apis/api";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = { username, password };
    login(user).then((res) => {
      if(res.success) {
        dispatch(loginUser(res.user));
        alert("Login successful")
        navigate("/");
      } else{
        alert("Login failed");
      }
    })
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
            <button className="btn btn-submit" type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
