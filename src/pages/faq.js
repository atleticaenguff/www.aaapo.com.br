import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"

const FaqPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulFaq.metaTitle}
      metaDescriptionLayout={
        data.contentfulFaq.metaDescription.metaDescription
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
                  {data.contentfulFaq.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulFaq.heroSubtitle.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {data.allContentfulFaq.edges.map(({ node }) => (
              <>
                {node.perguntasRespostas.map(({ key, value }) => (
                  <div className="column is-6 mb-4">
                    <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                      {key}
                    </h4>
                    <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                      {value}
                    </p>
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

export default FaqPage

export const query = graphql`
  query FaqPage {
    contentfulFaq {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
    }
    allContentfulFaq {
      edges {
        node {
          perguntasRespostas {
            key
            value
          }
        }
      }
    }
  }
`
