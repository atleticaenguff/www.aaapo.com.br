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
        media={frontmatter.media}
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
          button {
            url
            title
          }
          video {
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED)
              }
            }
            id
          }
        }
        about {
          uppertitle
          title
          subtitle
          button1 {
            url
            title
          }
          button2 {
            url
            title
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
        }
        modalities {
          image {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
          uppertitle
          title
          list {
            item1
            item2
            item3
            item4
          }
          button {
            url
            title
          }
        }
        media {
          uppertitle
          title
          subtitle
          button {
            url
            title
          }
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
          button1 {
            url
            title
          }
          button2 {
            url
            title
          }
        }
      }
    }
  }
`
