import React, { useContext } from "react";
import "./Header.css";

import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const {user, logOut}=useContext(AuthContext)
const handleLogOut=()=>{
  logOut()
  .then()
  .catch()
}
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div className="navbar">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      
      </div>
      <p>{user && <span className="email">{user.email} <button className="signout" onClick={handleLogOut}>Sign Out <FontAwesomeIcon  icon={faArrowRightFromBracket} /> </button></span>}</p>
      
    </nav>
  );
};

export default Header;
