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
        report1={frontmatter.report1}
        report2={frontmatter.report2}
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
        report1 {
          title
          subtitle
          button {
            url
            title
          }
        }
        report2 {
          title
          subtitle
          button {
            url
            title
          }
        }
      }
    }
  }
`
