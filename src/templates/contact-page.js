import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactPageTemplate from "../components/templates/ContactPageTemplate"

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        contact1={frontmatter.contact1}
        contact2={frontmatter.contact2}
        local={frontmatter.local}
        map={frontmatter.map}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
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
        contact1 {
          title
          subtitle
          email
        }
        contact2 {
          title
          subtitle
          email
        }
        local {
          title
          subtitle
          url
          address
        }
        map {
          latitude
          longitude
        }
      }
    }
  }
`
