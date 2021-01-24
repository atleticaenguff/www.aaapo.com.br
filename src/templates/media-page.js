import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MediaPageTemplate from "../components/templates/MediaPageTemplate"

const MediaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MediaPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        features={frontmatter.features}
        soundcloud={frontmatter.soundcloud}
      />
    </Layout>
  )
}

MediaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MediaPage

export const MediaPageQuery = graphql`
  query MediaPage($id: String!) {
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
