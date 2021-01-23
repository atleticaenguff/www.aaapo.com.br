import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import NotFoundPageTemplate from "../components/templates/NotFoundPageTemplate"

const NotFoundPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <NotFoundPageTemplate seo={frontmatter.seo} hero={frontmatter.hero} />
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NotFoundPage

export const NotFoundPageQuery = graphql`
  query NotFoundPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          meta_title
          meta_description
        }
        hero {
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
