import React from "react";
import { Link } from "gatsby";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="text-yellow-700 bg-blue-1100 border-t border-blue-grey-900  py-5">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
          <div className="mx-auto sm:mx-0">
            <h1 className="font-serif text-3xl border border-yellow-700 leading-none p-1">
              W
            </h1>
          </div>
          <section className="mt-10 sm:mt-0">
            <ul className="flex flex-col sm:flex-row justify-center items-center sm:px-20">
              <li>
                <Link
                  to="/"
                  className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="block px-5 mt-1 sm:mt-0 hover:bg-blue-grey-900 hover:text-yellow-500 focus:outline-none focus:bg-blue-grey-900 rounded"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </section>
          <div className="flex justify-around py-10">
            <a
              title="facebook"
              className="bg-yellow-700 p-1 hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none"
              href="https://facebook.com"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "2em", height: "2em" }}
              />
            </a>
            <a
              title="twitter"
              className="bg-yellow-700 p-1 hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none sm:mx-2"
              href="https://twitter.com"
            >
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "2em", height: "2em" }}
              />
            </a>
            <a
              title="instagram"
              className="bg-yellow-700 p-1 hover:bg-yellow-500 focus:bg-yellow-500 focus:outline-none"
              href="https://instagram.com"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "2em", height: "2em" }}
              />
            </a>
          </div>
        </div>
        <div className="text-center">
          <div> © {new Date().getFullYear()} Winberg LLC</div>
          <div>
            Built by{" "}
            <a
              className="font-semibold hover:text-yellow-500"
              href="https://www.forgecs.com/"
            >
              Forge Creative Systems
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
