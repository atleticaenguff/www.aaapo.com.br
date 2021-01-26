import React from "react"
import footer from "../data/footer.json"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const localTimeYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="has-text-centered">
            <span className="icon is-large mr-2">
              <a
                href={footer.social.facebook.url}
                rel="noreferrer"
                target="_blank"
                aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-2"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a
                href={footer.social.twitter.url}
                rel="noreferrer"
                target="_blank"
                aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-2"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a
                href={footer.social.instagram.url}
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-2"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a
                href={footer.social.youtube.url}
                rel="noreferrer"
                target="_blank"
                aria-label="YouTube">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-2"
                />
              </a>
            </span>
            <span className="icon is-large mx-2">
              <a
                href={footer.social.linkedin.url}
                rel="noreferrer"
                target="_blank"
                aria-label="LinkedIn">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="has-text-white"
                  transform="shrink-2"
                />
              </a>
            </span>
            <span
              className="icon is-large ml-2"
              style={{ verticalAlign: "top" }}>
              <a
                className="has-text-weight-semibold has-text-white"
                href={footer.social.more.url}
                rel="noreferrer"
                target="_blank"
                aria-label="Mais">
                mais
              </a>
            </span>
          </div>
          <hr></hr>
          <div className="columns is-vcentered">
            <div className="column has-text-centered-mobile">
              <p className="has-text-weight-regular is-marginless">
                © {localTimeYear + " "}
                <span className="has-text-weight-semibold">
                  {footer.copyright.name}
                </span>
              </p>
              <p className="has-text-regular">Todos direitos reservados</p>
            </div>
            <div className="column has-text-weight-semibold has-text-right has-text-centered-mobile">
              <Link className="has-text-white mr-1" to="/faq">
                FAQ
              </Link>
              <span>&#8231;</span>
              <Link className="has-text-white ml-1" to="/transparencia">
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
