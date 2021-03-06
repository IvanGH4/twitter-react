import React from "react";
import { useLocation } from "react-router-dom";

function Navbar({ setShowMenu, showMenu }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/registro" && (
        <div>
          <nav class="navbar d-lg-none navbar-dark bg-dark">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">
                <i className="fab fa-twitter"></i>
              </span>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <button
                    class=" btn nav-link"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </li>{" "}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
