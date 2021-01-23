import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ModalitiesPageTemplate from "../components/templates/ModalitiesPageTemplate"

const ModalitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ModalitiesPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        modalities={frontmatter.modalities}
      />
    </Layout>
  )
}

ModalitiesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ModalitiesPage

export const ModalitiesPageQuery = graphql`
  query ModalitiesPage($id: String!) {
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
        modalities {
          title
          subtitle
          collapses {
            title
            days {
              days1
              days2
              days3
            }
            addresses {
              address1 {
                url
                address
              }
              address2 {
                url
                address
              }
              address3 {
                url
                address
              }
            }
            people {
              person1 {
                name
                phone
              }
              person2 {
                name
                phone
              }
              person3 {
                name
                phone
              }
            }
          }
        }
      }
    }
  }
`
