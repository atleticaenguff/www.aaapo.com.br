/* eslint-disable */
import React from "react"
import navbar from "../data/navbar.json"
import { Link } from "gatsby"

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <nav
      className="navbar is-primary is-spaced pt-2 pb-0"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand is-align-items-center">
          <Link
            to="/"
            className="navbar-item"
            style={{ backgroundColor: "transparent" }}>
            <img
              src="/imagens/logo.png"
              alt="Logo"
              width="85"
              height="85"></img>
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
              to={navbar.item1.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.item1.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.item2.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.item2.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.item3.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.item3.title}
            </Link>
            <a
              className="navbar-item has-text-weight-semibold"
              href={navbar.item4.url}
              rel="noreferrer"
              target="_blank"
              style={{ backgroundColor: "transparent" }}>
              {navbar.item4.title}
            </a>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navbar.item5.url}
              style={{ backgroundColor: "transparent" }}>
              {navbar.item5.title}
            </Link>
            <div className="navbar-item">
              <a
                className="button has-text-weight-semibold is-dark"
                href={navbar.item6.url}>
                {navbar.item6.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
