import React from "react"
import { Link } from "gatsby"
import footer from "../data/footer.json"
import { StaticImage } from "gatsby-plugin-image"
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
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <Link to="/">
                <StaticImage
                  src="../images/logo.png"
                  alt="logo"
                  placeholder="blurred"
                  layout="fixed"
                  width={85}
                  height={85}
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <Link
                className="has-text-weight-semibold has-text-white"
                to={footer.navigation.item1.url}>
                {footer.navigation.item1.title}
              </Link>
            </div>
            <div className="level-item">
              <Link
                className="has-text-weight-semibold has-text-white"
                to={footer.navigation.item2.url}>
                {footer.navigation.item2.title}
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="level">
          <div className="level-left">
            <div className="level-item is-hidden-mobile is-block">
              <p className="has-text-weight-regular has-text-white">
                © {localTimeYear + " "}
                <span className="has-text-weight-semibold">
                  {footer.copyright.name + ". "}
                </span>
              </p>
              <p className="has-text-weight-regular has-text-white">
                Todos direitos reservados.
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item mr-0">
              <span className="icon is-large">
                <a
                  href={footer.social.facebook.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className="has-text-white"
                    transform="shrink-4"
                  />
                </a>
              </span>
              <span className="icon is-large">
                <a
                  href={footer.social.twitter.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="twitter">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className="has-text-white"
                    transform="shrink-4"
                  />
                </a>
              </span>
              <span className="icon is-large">
                <a
                  href={footer.social.instagram.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="has-text-white"
                    transform="shrink-4"
                  />
                </a>
              </span>
              <span className="icon is-large">
                <a
                  href={footer.social.youtube.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="youtube">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    className="has-text-white"
                    transform="shrink-4"
                  />
                </a>
              </span>
              <span className="icon is-large">
                <a
                  href={footer.social.linkedin.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="linkedin">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="has-text-white"
                    transform="shrink-4"
                  />
                </a>
              </span>
              <span className="icon is-large">
                <a
                  className="has-text-weight-semibold has-text-white"
                  href={footer.social.more.url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="mais">
                  mais
                </a>
              </span>
            </div>
            <div className="level-item is-hidden-tablet has-text-centered mb-0">
              <p className="has-text-weight-regular has-text-white">
                © {localTimeYear + " "}
                <span className="has-text-weight-semibold">
                  {footer.copyright.name + "."}
                </span>
              </p>
            </div>
            <div className="level-item is-hidden-tablet is-block has-text-centered">
              <p className="has-text-weight-regular has-text-white">
                Todos direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
