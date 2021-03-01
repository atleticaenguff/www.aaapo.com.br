/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import navbar from "../data/navbar.json"

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <nav
      className="navbar is-primary is-spaced pt-2 pb-0"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand is-align-items-center">
          <Link
            to={navbar.logo.url}
            className="navbar-item"
            style={{ backgroundColor: "transparent" }}>
            <img
              src={navbar.logo.src}
              alt="Logo"
              width="85"
              height="auto"></img>
          </Link>
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="nav-menu"
            onClick={toggleNavbar}
            style={{ backgroundColor: "transparent" }}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          id="nav-menu"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.navigation.item1.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.navigation.item1.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.navigation.item2.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.navigation.item2.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.navigation.item3.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.navigation.item3.title}
            </Link>
            <a
              className="navbar-item has-text-weight-semibold"
              href={navbar.navigation.item4.url}
              rel="noreferrer"
              target="_blank"
              style={{ backgroundColor: "transparent" }}>
              {navbar.navigation.item4.title}
            </a>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.navigation.item5.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.navigation.item5.title}
            </Link>
            <div className="navbar-item">
              <a
                className="button has-text-weight-semibold is-dark"
                href={navbar.navigation.item6.url}>
                {navbar.navigation.item6.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
