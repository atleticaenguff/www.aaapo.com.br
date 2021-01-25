import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const TransparencyPageTemplate = ({ seo, hero, reports }) => (
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
    <section
      className="hero is-medium is-primary"
      style={{
        backgroundImage: "url('/images/icons.svg')",
        backgroundPosition: "center",
      }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
                {hero.title}
              </h1>
              <p className="subtitle is-size-6-mobile has-text-weight-medium">
                {hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {reports.map((report, id) => (
            <div className="column is-6 mb-6" key={id}>
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold has-text-dark">
                {report.title}
              </h2>
              <a
                className="button has-text-weight-semibold is-primary"
                href={report.button.url}
                rel="noreferrer"
                target="_blank">
                {report.button.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

TransparencyPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      button: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    })
  ),
}

export default TransparencyPageTemplate
