import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AboutPageTemplate from "../components/templates/AboutPageTemplate"

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        history={frontmatter.history}
        achievements={frontmatter.achievements}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
        history {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
          subtitle {
            paragraph1
            paragraph2
            paragraph3
          }
        }
        achievements {
          title
          years {
            number
            competitions {
              title
              awards {
                title
              }
            }
          }
        }
      }
    }
  }
`
