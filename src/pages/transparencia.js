import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const TransparenciaPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulTransparencia.metaTitle}
      metaDescriptionLayout={
        data.contentfulTransparencia.metaDescription.metaDescription
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
                  {data.contentfulTransparencia.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulTransparencia.heroSubtitle.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.allContentfulTransparencia.edges.map(({ node }) => (
              <>
                {node.recursos.map(({ key, value }) => (
                  <div className="column is-4 mb-4">
                    <div className="box">
                      <h2 className="title is-3 has-text-weight-bold has-text-dark">
                        {key}
                      </h2>
                      <a
                        className="button has-text-weight-semibold is-primary"
                        href={value}
                        rel="noreferrer"
                        target="_blank">
                        <span>Acessar</span>
                        <span className="icon is-small">
                          <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TransparenciaPage

export const query = graphql`
  query TransparenciaPage {
    contentfulTransparencia {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
    }
    allContentfulTransparencia {
      edges {
        node {
          recursos {
            key
            value
          }
        }
      }
    }
  }
`
