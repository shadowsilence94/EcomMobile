import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`footer mt-auto py-4 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Htut's Gadget Shop</h5>
            <p
              className={
                theme === "light" ? "text-muted" : "text-light opacity-75"
              }
            >
              Your one-stop shop for all electronic gadgets and accessories.
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className={
                    theme === "light"
                      ? "text-decoration-none text-muted"
                      : "text-decoration-none text-light opacity-75"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={
                    theme === "light"
                      ? "text-decoration-none text-muted"
                      : "text-decoration-none text-light opacity-75"
                  }
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/favorite"
                  className={
                    theme === "light"
                      ? "text-decoration-none text-muted"
                      : "text-decoration-none text-light opacity-75"
                  }
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a
                href="#"
                className={
                  theme === "light" ? "text-muted" : "text-light opacity-75"
                }
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className={
                  theme === "light" ? "text-muted" : "text-light opacity-75"
                }
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className={
                  theme === "light" ? "text-muted" : "text-light opacity-75"
                }
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className={
                  theme === "light" ? "text-muted" : "text-light opacity-75"
                }
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <hr className={theme === "light" ? "" : "border-secondary"} />

        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">
              &copy; {currentYear} Htut's Gadget Shop. All rights reserved.
            </p>
            <p className="small mt-2 mb-0">
              <span
                className={
                  theme === "light" ? "text-muted" : "text-light opacity-75"
                }
              >
                Designed by Htut Ko
                Ko
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
