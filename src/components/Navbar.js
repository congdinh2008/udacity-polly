import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authedUser";

const Navbar = () => {
  const [isShowProfileMenu, setIsShowProfileMenu] = useState(false);
  const isLoggedIn = useSelector((state) => state.authedUser.isLoggedIn);
  const currentUser = useSelector((state) => state.authedUser.currentUser);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/leader-board">Leader Board</Link>
        </li>
        <li className="nav-item">
          <Link to="/add">New</Link>
        </li>
      </ul>
      <ul className="profile-menu">
        {isLoggedIn ? (
          <li
            className="nav-item"
            onClick={() => setIsShowProfileMenu(!isShowProfileMenu)}
          >
            <Link className="profile-avatar">
              <img src={currentUser.avatarURL} alt={currentUser.name} />
              <span className="profile-name" data-testid="profile-name">{currentUser.name}</span>
            </Link>
            <div
              className={`profile-dropdown d-flex flex-column text-center ${
                isShowProfileMenu ? "show" : ""
              }`}
            >
              <img src={currentUser.avatarURL} alt={currentUser.name} />
              <div className="profile-dropdown-actions d-flex flex-column">
                <span className="profile-name">{currentUser.name}</span>
                <Link to={"/login"} onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
