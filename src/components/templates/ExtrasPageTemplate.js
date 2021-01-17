import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const ExtrasPageTemplate = ({ seo, hero, features, soundcloud }) => (
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
          <div className="column is-8">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {features.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {features.subtitle}
            </p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {features.feature1.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {features.feature1.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={features.feature1.button.url}
                  rel="noreferrer"
                  target="_blank">
                  {features.feature1.button.title}
                </a>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {features.feature2.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {features.feature2.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={features.feature2.button.url}
                  rel="noreferrer"
                  target="_blank">
                  {features.feature2.button.title}
                </a>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {features.feature3.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {features.feature3.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={features.feature3.button.url}
                  rel="noreferrer"
                  target="_blank">
                  {features.feature3.button.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-light">
      <div className="container">
        <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
          {soundcloud.title}
        </h2>
        <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
          {soundcloud.subtitle}
        </p>
        <iframe
          title="SoundCloud"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/838307240&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    </section>
  </>
)

ExtrasPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  features: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    feature1: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      button: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    feature2: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      button: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    feature3: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      button: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
  music: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
}

export default ExtrasPageTemplate
