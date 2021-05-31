/*import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import AwardsCollapse from "../components/AwardsCollapse"

const SobrePage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulSobre.metaTitle}
      metaDescriptionLayout={
        data.contentfulSobre.metaDescription.metaDescription
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
                  {data.contentfulSobre.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulSobre.heroSubtitle.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
            {data.contentfulSobre.historiaTitle}
          </h2>
          <div className="columns">
            <div className="column is-4">
              <figure className="image">
                <GatsbyImage
                  image={data.contentfulSobre.historiaImage.gatsbyImageData}
                  alt="image"
                  style={{ borderRadius: "4px", opacity: "0.9" }}></GatsbyImage>
              </figure>
            </div>
            <div className="column is-8">
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulSobre.historiaSubtitle.paragraph1}
              </p>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulSobre.historiaSubtitle.paragraph2}
              </p>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulSobre.historiaSubtitle.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="conquistas" className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
            {data.contentfulSobre.conquistasTitle}
          </h2>
          <div className="columns is-multiline is-mobile">
            {data.allContentfulConquistas.edges.map(({ node }) => (
              <div className="column is-3-desktop is-6-tablet is-12-mobile">
                <div className="notification is-primary has-text-centered p-3">
                  <h3 className="title is-3 is-size-4-mobile has-text-weight-bold has-text-white">
                    {node.ano}
                  </h3>
                </div>
                {node.competicoes.map(({ competicao, titulos }) => (
                  <AwardsCollapse title={competicao}>
                    {titulos.map(({ key, value }) => (
                      <p className="subtitle is-6 has-text-weight-normal has-text-black is-marginless">
                        {`${value}${" - "}${key}`}
                      </p>
                    ))}
                  </AwardsCollapse>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SobrePage

export const query = graphql`
  query SobrePage {
    contentfulSobre {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      historiaTitle
      historiaImage {
        gatsbyImageData
      }
      historiaSubtitle {
        paragraph1
        paragraph2
        paragraph3
      }
      conquistasTitle
    }
    allContentfulConquistas {
      edges {
        node {
          ano
          competicoes {
            competicao
            titulos {
              key
              value
            }
          }
        }
      }
    }
  }
`
*/