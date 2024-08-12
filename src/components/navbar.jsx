import React from 'react'

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
          <div class="form-check form-switch" style={{color:mode=='dark'?"white":"black"}}>
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {mode==="light"?"Enable dark mode":"Enable Light mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
