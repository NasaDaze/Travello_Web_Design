import React from "react";

const Nav = () => {
  return (
    <div className="navbar text-black top-0 sticky z-10 bg-white rounded-2xl width-[90%]">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-40"
          >
            <li>
              <a>🏠 Home</a>
            </li>
            <li>
              <a>✈ Travel Plans</a>
            </li>
            <li>
              <a>⛑ Services</a>
            </li>
            <li>
              <a>📱 Contact us</a>
            </li>
          </ul>
        </div>
        <a href="index.html" className="btn btn-ghost normal-case text-3xl">
          Travello
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl ">
          <li>
            <a>🏠 Home</a>
          </li>
          <li>
            <a>✈ Travel Plans</a>
          </li>
          <li>
            <a>⛑ Services</a>
          </li>
          <li>
            <a>📱 Contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mx-4">
        <a className="btn btn-primary text-white ">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
