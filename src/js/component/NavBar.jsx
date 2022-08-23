import React from "react";
import { NavLink } from "./NavLink.jsx";

export const NavBar = (props) => {
  return (
    <div >
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Start Bootstrap</a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="NavMenu" className="justify-content-end collapse navbar-collapse">
            <ul className="navbar-nav ms-3">
              <NavLink href="#" text="Home"/>
              <NavLink href="#" text="About"/>
              <NavLink href="#" text="Services"/>
              <NavLink href="#" text="Contact"/>    
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
