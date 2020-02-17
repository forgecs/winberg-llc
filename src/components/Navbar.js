import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <nav
      className="text-yellow-700 bg-blue-1100"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="sm:flex sm:justify-between sm:items-center lg:max-w-4xl mx-auto">
        <div className="container flex items-center justify-between px-10 py-5">
          <Link className="" to="/" title="Winberg LLC">
            <h1 className="font-serif text-3xl border border-yellow-700 leading-none p-1">
              W
            </h1>
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-yellow-700 hover:text-yellow-500 focus:text-yellow-500 focus:outline-none p-1"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navMenu"
          className={`text-center px-5 pb-4 sm:pb-0 sm:flex ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
            to="/contact"
          >
            Contact
          </Link>
          <address>
            <a
              className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
              href="tel:+2514630305"
            >
              (251)4630305
            </a>
          </address>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
