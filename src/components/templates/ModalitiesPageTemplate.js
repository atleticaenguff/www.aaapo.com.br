import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import ModalitiesCollapse from "../ModalitiesCollapse"

const ModalitiesPageTemplate = ({ seo, hero, modalities }) => (
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
        <div className="columns">
          <div className="column is-8">
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {modalities.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {modalities.subtitle}
            </p>
          </div>
        </div>
        <div className="columns is-multiline">
          {modalities.collapses.map((collapse, id) => (
            <ModalitiesCollapse title={collapse.title} key={id}>
              <div className="block mb-4">
                <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                  Dias
                </h6>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.days.days1}
                </p>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.days.days2}
                </p>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.days.days3}
                </p>
              </div>
              <div className="block mb-4">
                <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                  Endereço
                </h6>
                <a
                  className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                  href={collapse.addresses.address1.url}
                  rel="noreferrer"
                  target="_blank">
                  {collapse.addresses.address1.address}
                </a>
                <a
                  className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                  href={collapse.addresses.address2.url}
                  rel="noreferrer"
                  target="_blank">
                  {collapse.addresses.address2.address}
                </a>
                <a
                  className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                  href={collapse.addresses.address3.url}
                  rel="noreferrer"
                  target="_blank">
                  {collapse.addresses.address3.address}
                </a>
              </div>
              <div className="block">
                <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                  Responsável
                </h6>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.people.person1.name}
                  <span
                    className={
                      (collapse.people.person1.name ||
                        collapse.people.person1.phone) === ""
                        ? "is-hidden"
                        : null
                    }>
                    {" - "}
                    <a
                      className="subtitle is-6 has-text-weight-normal has-text-link"
                      href={
                        "https://api.whatsapp.com/send?phone=+55" +
                        collapse.people.person1.phone
                      }
                      rel="noreferrer"
                      target="_blank">
                      WhatsApp
                    </a>
                  </span>
                </p>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.people.person2.name}
                  <span
                    className={
                      (collapse.people.person2.name ||
                        collapse.people.person2.phone) === ""
                        ? "is-hidden"
                        : null
                    }>
                    {" - "}
                    <a
                      className="subtitle is-6 has-text-weight-normal has-text-link"
                      href={
                        "https://api.whatsapp.com/send?phone=+55" +
                        collapse.people.person2.phone
                      }
                      rel="noreferrer"
                      target="_blank">
                      WhatsApp
                    </a>
                  </span>
                </p>
                <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                  {collapse.people.person3.name}
                  <span
                    className={
                      (collapse.people.person3.name ||
                        collapse.people.person3.phone) === ""
                        ? "is-hidden"
                        : null
                    }>
                    {" - "}
                    <a
                      className="subtitle is-6 has-text-weight-normal has-text-link"
                      href={
                        "https://api.whatsapp.com/send?phone=+55" +
                        collapse.people.person3.phone
                      }
                      rel="noreferrer"
                      target="_blank">
                      WhatsApp
                    </a>
                  </span>
                </p>
              </div>
            </ModalitiesCollapse>
          ))}
        </div>
      </div>
    </section>
  </>
)

ModalitiesPageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  modalities: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    collapses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        days: PropTypes.shape({
          days1: PropTypes.string,
          days2: PropTypes.string,
          days3: PropTypes.string,
        }),
        addresses: PropTypes.shape({
          address1: PropTypes.shape({
            url: PropTypes.string,
            address: PropTypes.string,
          }),
          address2: PropTypes.shape({
            url: PropTypes.string,
            address: PropTypes.string,
          }),
          address3: PropTypes.shape({
            url: PropTypes.string,
            address: PropTypes.string,
          }),
        }),
        people: PropTypes.shape({
          person1: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.string,
          }),
          person2: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.string,
          }),
          person3: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.string,
          }),
        }),
      })
    ),
  }),
}

export default ModalitiesPageTemplate
