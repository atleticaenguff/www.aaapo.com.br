import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import LeafletMap from "../components/LeafletMap"

const ContatoPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulContato.metaTitle}
      metaDescriptionLayout={
        data.contentfulContato.metaDescription.metaDescription
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
                  {data.contentfulContato.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulContato.heroSubtitle.heroSubtitle}
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
                  {data.contentfulContato.suporte.title}
                </h2>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {data.contentfulContato.suporte.subtitle}
                </p>
                <a
                  className="has-text-weight-semibold"
                  href={"mailto:" + data.contentfulContato.suporte.email}>
                  {data.contentfulContato.suporte.email}
                </a>
              </div>
              <div className="block">
                <span className="is-flex">
                  <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                    {data.contentfulContato.comercial.title}
                  </h2>
                  <a
                    className="button is-small has-text-weight-semibold is-outlined is-dark mt-1 ml-3"
                    href={data.contentfulContato.comercial.buttonUrl}
                    rel="noreferrer"
                    target="_blank">
                    <span>{data.contentfulContato.comercial.buttonTitle}</span>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faDownload} size="sm" />
                    </span>
                  </a>
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {data.contentfulContato.comercial.subtitle}
                </p>
                <a
                  className="has-text-weight-semibold"
                  href={"mailto:" + data.contentfulContato.comercial.email}>
                  {data.contentfulContato.comercial.email}
                </a>
              </div>
              <div className="block">
                <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                  {data.contentfulContato.endereco.title}
                </h2>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {data.contentfulContato.endereco.subtitle}
                </p>
                <a
                  className="has-text-weight-semibold"
                  href={data.contentfulContato.endereco.buttonUrl}
                  rel="noreferrer"
                  target="_blank">
                  {data.contentfulContato.endereco.buttonTitle}
                </a>
              </div>
            </div>
            <div className="column is-hidden-mobile">
              <LeafletMap
                lat={data.contentfulContato.mapa.lat}
                lng={data.contentfulContato.mapa.lon}
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
            lat={data.contentfulContato.mapa.lat}
            lng={data.contentfulContato.mapa.lon}
            height={"350px"}
            width={"auto"}
          />
        </div>
      </section>
    </Layout>
  )
}

export default ContatoPage

export const query = graphql`
  query ContatoPage {
    contentfulContato {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      suporte {
        title
        subtitle
        email
      }
      comercial {
        title
        buttonUrl
        buttonTitle
        subtitle
        email
      }
      endereco {
        title
        subtitle
        buttonUrl
        buttonTitle
      }
      mapa {
        lat
        lon
      }
    }
  }
`
