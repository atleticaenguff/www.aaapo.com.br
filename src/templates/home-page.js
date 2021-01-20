import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HomePageTemplate from "../components/templates/HomePageTemplate"

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        seo={frontmatter.seo}
        hero={frontmatter.hero}
        about={frontmatter.about}
        modalities={frontmatter.modalities}
        extras={frontmatter.extras}
        store={frontmatter.store}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seo {
          meta_title
          meta_description
        }
        hero {
          title
          subtitle
          button
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
        about {
          uppertitle
          title
          subtitle
          button1
          button2
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        modalities {
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          uppertitle
          title
          list {
            list1
            list2
            list3
            list4
          }
          button
        }
        extras {
          uppertitle
          title
          subtitle
          button
          block1 {
            undertitle
            undersubtitle
          }
          block2 {
            undertitle
            undersubtitle
          }
          block3 {
            undertitle
            undersubtitle
          }
          block4 {
            undertitle
            undersubtitle
          }
        }
        store {
          uppertitle
          title
          subtitle
          button1
          button2
        }
      }
    }
  }
`
