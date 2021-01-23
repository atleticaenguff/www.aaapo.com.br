import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ExtrasPageTemplate from "../components/templates/ExtrasPageTemplate"

const ExtrasPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ExtrasPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        features={frontmatter.features}
        soundcloud={frontmatter.soundcloud}
      />
    </Layout>
  )
}

ExtrasPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExtrasPage

export const ExtrasPageQuery = graphql`
  query ExtrasPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          meta_title
          meta_description
        }
        hero {
          title
          subtitle
        }
        features {
          title
          subtitle
          feature1 {
            title
            subtitle
            button {
              url
              title
            }
          }
          feature2 {
            title
            subtitle
            button {
              url
              title
            }
          }
          feature3 {
            title
            subtitle
            button {
              url
              title
            }
          }
        }
        soundcloud {
          title
          subtitle
          button {
            url
            title
          }
          src
        }
      }
    }
  }
`
