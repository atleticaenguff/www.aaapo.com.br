import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import TransparencyPageTemplate from "../components/templates/TransparencyPageTemplate"

const TransparencyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TransparencyPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        reports={frontmatter.reports}
      />
    </Layout>
  )
}

TransparencyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TransparencyPage

export const TransparencyPageQuery = graphql`
  query TransparencyPage($id: String!) {
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
        reports {
          title
          button {
            url
            title
          }
        }
      }
    }
  }
`
