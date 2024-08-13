import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-regular-svg-icons'; // Example regular icon
export default function Navbar({ mode, toggleMode }) {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme={mode == "dark" && "dark"}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="mode" onClick={toggleMode}>
            {mode === "light" ? (
              <FontAwesomeIcon
                icon={faMoon}
                style={{ fontSize: "30px", marginRight: "10px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faSun}
                style={{ fontSize: "30px", marginRight: "10px" }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
