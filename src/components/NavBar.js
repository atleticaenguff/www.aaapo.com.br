/* eslint-disable */
import React from "react"
import navigation from "../data/navigation.json"
import { Link } from "gatsby"

const NavBar = ({ toggleNavbar, isActive }) => {
  return (
    <nav
      className="navbar is-primary is-spaced pt-2 pb-0"
      aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand" style={{ alignItems: "center" }}>
          <Link
            to="/"
            className="navbar-item"
            style={{ backgroundColor: "transparent" }}>
            <img
              src="/images/logo.png"
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
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
              to={navigation.item1.url}
              style={{ backgroundColor: "transparent" }}>
              {navigation.item1.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navigation.item2.url}
              style={{ backgroundColor: "transparent" }}>
              {navigation.item2.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navigation.item3.url}
              style={{ backgroundColor: "transparent" }}>
              {navigation.item3.title}
            </Link>
            <Link
              className="navbar-item has-text-weight-semibold"
              to={navigation.item4.url}
              style={{ backgroundColor: "transparent" }}>
              {navigation.item4.title}
            </Link>
            <div className="navbar-item">
              <a
                className="button has-text-weight-semibold is-dark"
                href={navigation.item5.url}>
                {navigation.item5.title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
