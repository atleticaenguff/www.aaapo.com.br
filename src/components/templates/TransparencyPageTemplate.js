import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const TransparencyPageTemplate = ({
  seo,
  hero,
  report1,
  report2,
  report3,
  report4,
  report5,
  report6,
}) => (
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
        <div className="columns">
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report1.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report1.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report1.button.url}
              rel="noreferrer"
              target="_blank">
              {report1.button.title}
            </a>
          </div>
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report2.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report2.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report2.button.url}
              rel="noreferrer"
              target="_blank">
              {report2.button.title}
            </a>
          </div>
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report3.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report3.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report3.button.url}
              rel="noreferrer"
              target="_blank">
              {report3.button.title}
            </a>
          </div>
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report4.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report4.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report4.button.url}
              rel="noreferrer"
              target="_blank">
              {report4.button.title}
            </a>
          </div>
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report5.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report5.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report5.button.url}
              rel="noreferrer"
              target="_blank">
              {report5.button.title}
            </a>
          </div>
          <div className="column is-6">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {report6.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {report6.subtitle}
            </p>
            <a
              className="button has-text-weight-semibold is-primary"
              href={report6.button.url}
              rel="noreferrer"
              target="_blank">
              {report6.button.title}
            </a>
          </div>
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
  report1: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  report2: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  report3: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  report4: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  report5: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  report6: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}

export default TransparencyPageTemplate
