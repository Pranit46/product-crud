import react from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="nav1">
      <div className="item-name">
        <NavLink
          to="cloths"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Cloths
        </NavLink>
      </div>
      <div className="item-name">
        <NavLink
          to="food"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Food
        </NavLink>
      </div>
      <div className="item-name">
        <NavLink
          to="cart"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Go to cart
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
