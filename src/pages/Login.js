import { useEffect, useState } from "react";
import { FaPoll } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/authedUser";
import { login } from "../apis/api";
import RouteURLs from "../constants/routeURLs";

const Login = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {state} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      setUsername(selectedUser.id);
      setPassword(selectedUser.password);
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username, password };
    login(user)
      .then((res) => {
        if (res.success) {
          dispatch(loginUser(res.user));
          navigate(state?.path || RouteURLs.HOME_URL);
        } else {
          setErrorMessage(res.message);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <section className="form-section login-section d-flex align-items-center">
      <div className="form-container login-container text-center">
        <div className="form-header">
          <h1>Udacity Polly</h1>
          <FaPoll />
        </div>
        <div className="select-user">
          <h2>Select an user</h2>
          <div className="list-user d-flex justify-content-center">
            {users &&
              users.map((user) => (
                <div
                  key={user.id}
                  className="card card-user w-25 m-2"
                  data-testid="card-user"
                  onClick={() => setSelectedUser(user)}
                >
                  <div className="card-body">
                    <img
                      className="user-avatar"
                      src={user.avatarURL}
                      alt={user.name}
                    />
                    <span className="user-name">{user.name}</span>
                  </div>
                </div>
              ))}
          </div>
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
                data-testid="username"
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
                data-testid="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="btn btn-submit"
              data-testid="btn-submit"
              type="submit"
            >
              Login
            </button>
          </form>
          <span className={`error-message ${errorMessage ? "show" : ""}`}>
            {errorMessage}
          </span>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => users[id]),
  };
};

export default connect(mapStateToProps)(Login);
