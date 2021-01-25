import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import LeafletMap from "../../components/LeafletMap"

const ContactPageTemplate = ({ seo, hero, contact1, contact2, local, map }) => (
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
          <div className="column">
            <div className="block">
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {contact1.title}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {contact1.subtitle}
              </p>
              <a
                className="has-text-weight-semibold"
                href={"mailto:" + contact1.email}>
                {contact1.email}
              </a>
            </div>
            <div className="block">
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {contact2.title}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {contact2.subtitle}
              </p>
              <a
                className="has-text-weight-semibold"
                href={"mailto:" + contact2.email}>
                {contact2.email}
              </a>
              <p className="buttons mt-4">
                <a
                  class="button is-small has-text-weight-semibold is-outlined is-dark"
                  href={contact2.button.title}
                  rel="noreferrer"
                  target="_blank">
                  {contact2.button.title}
                </a>
              </p>
            </div>
            <div className="block">
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {local.title}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {local.subtitle}
              </p>
              <a
                className="has-text-weight-semibold"
                href={local.url}
                rel="noreferrer"
                target="_blank">
                {local.address}
              </a>
            </div>
          </div>
          <div className="column is-hidden-mobile">
            <LeafletMap
              lat={map.latitude}
              lng={map.longitude}
              height={"100%"}
              width={"auto"}
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container is-fullhd is-hidden-tablet">
        <LeafletMap
          lat={map.latitude}
          lng={map.longitude}
          height={"350px"}
          width={"auto"}
        />
      </div>
    </section>
  </>
)

ContactPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  contact1: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    email: PropTypes.string,
  }),
  contact2: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    email: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  local: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    address: PropTypes.string,
  }),
  map: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
}

export default ContactPageTemplate
