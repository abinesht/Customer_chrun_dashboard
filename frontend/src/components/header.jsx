import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <a className="navbar-brand h1 mx-4 text-white" href="/">
        Chatterbox Telco
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto"></ul>
        <span className="navbar-text text-white me-3">Dashboard</span>
      </div>
    </nav>
  );
};

export default Header;
