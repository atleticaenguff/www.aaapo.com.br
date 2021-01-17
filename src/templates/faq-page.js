import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import FaqPageTemplate from "../components/templates/FaqPageTemplate"

const FaqPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FaqPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        faqs={frontmatter.faqs}
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FaqPage

export const FaqPageQuery = graphql`
  query FaqPage($id: String!) {
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
        faqs {
          question
          answer
        }
      }
    }
  }
`
