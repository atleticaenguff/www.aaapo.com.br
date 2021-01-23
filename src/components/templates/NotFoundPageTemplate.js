import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NotFoundPageTemplate = ({ seo, hero }) => (
  <>
    <Helmet>
      <title>{seo.meta_title}</title>
      <meta name="title" content={seo.meta_title} />
      <meta name="description" content={seo.meta_description} />
      <meta property="og:title" content={seo.meta_title} />
      <meta property="og:description" content={seo.meta_description} />
      <meta name="twitter:title" content={seo.meta_title} />
      <meta name="twitter:description" content={seo.meta_description} />
    </Helmet>
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
            {hero.title}
          </h1>
          <p className="subtitle is-size-6-mobile has-text-weight-medium">
            {hero.subtitle}
          </p>
          <Link
            className="button has-text-weight-semibold is-dark"
            to={hero.button.url}>
            {hero.button.title}
          </Link>
        </div>
      </div>
    </section>
  </>
)

NotFoundPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}

export default NotFoundPageTemplate
