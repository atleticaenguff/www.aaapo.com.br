import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const KitMarcaPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulKitDeMarca.metaTitle}
      metaDescriptionLayout={
        data.contentfulKitDeMarca.metaDescription.metaDescription
      }>
      <section
        className="hero is-medium is-primary"
        style={{
          backgroundImage: `url(${BackgroundIcons})`,
          backgroundPosition: "center",
        }}>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
                  {data.contentfulKitDeMarca.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulKitDeMarca.heroSubtitle.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6 mb-4">
              <div className="box">
                <h3 className="title is-3 has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulKitDeMarca.guiaMarca.title}
                </h3>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {data.contentfulKitDeMarca.guiaMarca.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulKitDeMarca.guiaMarca.buttonUrl}
                  rel="noreferrer"
                  target="_blank"
                  disabled>
                  <span>{data.contentfulKitDeMarca.guiaMarca.buttonTitle}</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-6 mb-4">
              <div className="box">
                <h3 className="title is-3 has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulKitDeMarca.logoSimbolos.title}
                </h3>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {data.contentfulKitDeMarca.logoSimbolos.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulKitDeMarca.logoSimbolos.buttonUrl}
                  rel="noreferrer"
                  target="_blank"
                  disabled>
                  <span>
                    {data.contentfulKitDeMarca.logoSimbolos.buttonTitle}
                  </span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default KitMarcaPage

export const query = graphql`
  query KitMarcaPage {
    contentfulKitDeMarca {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      guiaMarca {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
      logoSimbolos {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
    }
  }
`
