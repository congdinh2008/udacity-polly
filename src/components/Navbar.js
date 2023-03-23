import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avatars/avatar-5.png";

const Navbar = () => {
  const [isShowProfileMenu, setIsShowProfileMenu] = useState(false);

  const logout = () => {};
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
          <Link to="/new">New</Link>
        </li>
      </ul>
      <ul className="profile-menu">
        <li
          className="nav-item"
          onClick={() => setIsShowProfileMenu(!isShowProfileMenu)}
        >
          <Link className="profile-avatar">
            <img src={avatar} alt="" />
            <span className="profile-name">Cong Dinh</span>
          </Link>
          <div
            className={`profile-dropdown d-flex flex-column text-center ${
              isShowProfileMenu ? "show" : ""
            }`}
          >
            <img src={avatar} alt="" />
            <div className="profile-dropdown-actions d-flex flex-column">
              <span className="profile-name">Cong Dinh</span>
              <Link to={"/"} onClick={logout}>
                Logout
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
