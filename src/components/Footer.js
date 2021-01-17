import React from "react"
import social from "../data/social.json"
import copyright from "../data/copyright.json"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="has-text-centered">
            <span className="icon is-large mr-2">
              <a href={social.facebook.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a href={social.twitter.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a href={social.instagram.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a href={social.youtube.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a href={social.linkedin.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
            <span className="icon is-large" style={{ verticalAlign: "top" }}>
              <a href={social.more.url} rel="noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faPlus}
                  size="1x"
                  className="has-text-white"
                  transform="shrink-1"
                />
              </a>
            </span>
          </div>
          <hr></hr>
          <div className="columns is-vcentered">
            <div className="column has-text-centered-mobile">
              <p className="has-text-weight-regular is-marginless">
                © {copyright.year}{" "}
                <span className="has-text-weight-semibold">
                  {copyright.name}
                </span>
              </p>
              <p className="has-text-regular">Todos direitos reservados</p>
            </div>
            <div className="column has-text-weight-semibold has-text-right has-text-centered-mobile">
              <Link className="has-text-white mr-1" to="/faq">
                FAQ
              </Link>
              <span>&#8231;</span>
              <Link className="has-text-white ml-1" to="/transparency">
                Transparência
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
