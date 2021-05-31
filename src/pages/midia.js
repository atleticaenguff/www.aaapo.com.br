/*import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const MidiaPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulMidia.metaTitle}
      metaDescriptionLayout={
        data.contentfulMidia.metaDescription.metaDescription
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
                  {data.contentfulMidia.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulMidia.heroSubtitle.heroSubtitle}
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
                {data.contentfulMidia.recursosTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulMidia.recursosSubtitle.recursosSubtitle}
              </p>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-4">
              <div className="box">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulMidia.recurso1.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {data.contentfulMidia.recurso1.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulMidia.recurso1.buttonUrl}
                  rel="noreferrer"
                  target="_blank">
                  <span>{data.contentfulMidia.recurso1.buttonTitle}</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulMidia.recurso2.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {data.contentfulMidia.recurso2.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulMidia.recurso2.buttonUrl}
                  rel="noreferrer"
                  target="_blank">
                  <span>{data.contentfulMidia.recurso2.buttonTitle}</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </span>
                </a>
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <h4 className="title is-4 has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulMidia.recurso3.title}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {data.contentfulMidia.recurso3.subtitle}
                </p>
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulMidia.recurso3.buttonUrl}
                  rel="noreferrer"
                  target="_blank">
                  <span>{data.contentfulMidia.recurso3.buttonTitle}</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulMidia.musicaTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulMidia.musicaSubtitle.musicaSubtitle}
              </p>
              <a
                className="button has-text-weight-semibold is-dark is-hidden-mobile"
                href={data.contentfulMidia.musicaButtonUrl}
                rel="noreferrer"
                target="_blank">
                <span>{data.contentfulMidia.musicaButtonTitle}</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                </span>
              </a>
            </div>
            <div className="column is-7">
              <iframe
                title="SoundCloud"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={data.contentfulMidia.musicaEmbedSrc}></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MidiaPage

export const query = graphql`
  query MidiaPage {
    contentfulMidia {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      recursosTitle
      recursosSubtitle {
        recursosSubtitle
      }
      recurso1 {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
      recurso2 {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
      recurso3 {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
      musicaTitle
      musicaSubtitle {
        musicaSubtitle
      }
      musicaButtonUrl
      musicaButtonTitle
      musicaEmbedSrc
    }
  }
`
*/