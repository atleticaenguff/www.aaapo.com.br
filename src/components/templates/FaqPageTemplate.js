import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

const FaqPageTemplate = ({ seo, hero, faqs }) => (
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
          {faqs.map((faq, id) => (
            <div className="column is-12 mb-4" key={id}>
              <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark is-flex is-align-items-center">
                {faq.question}
                <span
                  className="has-text-primary is-size-3 is-size-6-mobile mr-2 mb-1"
                  style={{
                    position: "absolute",
                    right: "100%",
                  }}>
                  &#9632;
                </span>
              </h4>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

FaqPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
}

export default FaqPageTemplate
