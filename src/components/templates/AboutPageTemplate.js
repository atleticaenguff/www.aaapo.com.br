import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage"
import AwardsCollapse from "../AwardsCollapse"

const AboutPageTemplate = ({ seo, hero, history, achievements }) => (
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
        backgroundImage: "url('/imagens/icones.svg')",
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
        <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
          {history.title}
        </h2>
        <div className="columns">
          <div className="column is-4">
            <figure className="image">
              <PreviewCompatibleImage imageInfo={history.image} alt="" />
            </figure>
          </div>
          <div className="column is-8">
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {history.subtitle.paragraph1}
            </p>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {history.subtitle.paragraph2}
            </p>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {history.subtitle.paragraph3}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="conquistas" className="section has-background-light">
      <div className="container">
        <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
          {achievements.title}
        </h2>
        <div className="columns is-multiline is-mobile">
          {achievements.years.map((year, id) => (
            <div
              className="column is-3-desktop is-6-tablet is-12-mobile"
              key={id}>
              <div className="notification is-primary has-text-centered p-3">
                <h3 className="title is-3 is-size-4-mobile has-text-weight-bold has-text-white">
                  {year.number}
                </h3>
              </div>
              {year.competitions.map((competition, id) => (
                <AwardsCollapse title={competition.title} key={id}>
                  {competition.awards.map((award, id) => (
                    <p
                      className="subtitle is-6 has-text-weight-normal has-text-black is-marginless"
                      key={id}>
                      {award.title}
                    </p>
                  ))}
                </AwardsCollapse>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

AboutPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  history: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    subtitle: PropTypes.shape({
      paragraph1: PropTypes.string,
      paragraph2: PropTypes.string,
      paragraph3: PropTypes.string,
    }),
  }),
  achievements: PropTypes.shape({
    title: PropTypes.string,
    years: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string,
        competitions: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            awards: PropTypes.arrayOf(
              PropTypes.shape({
                title: PropTypes.string,
              })
            ),
          })
        ),
      })
    ),
  }),
}

export default AboutPageTemplate
