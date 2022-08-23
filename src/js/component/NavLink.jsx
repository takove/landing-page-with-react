import React from "react";

export const NavLink = (props) => {
  return (
    <li className="nav-item">
      <a href={props.href} className="nav-link">
        {props.text}
      </a>
    </li>
  );
};
