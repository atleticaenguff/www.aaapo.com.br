import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFull } from "@fortawesome/free-solid-svg-icons"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <section
        className="hero is-primary"
        style={{
          backgroundImage: `url(${BackgroundIcons})`,
          backgroundPosition: "center",
        }}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
                  {data.contentfulIndex.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulIndex.heroSubtitle.heroSubtitle}
                </p>
                <Link
                  className="button has-text-weight-semibold is-dark"
                  to={data.contentfulIndex.heroButtonUrl}>
                  {data.contentfulIndex.heroButtonTitle}
                </Link>
              </div>
              <div className="column" style={{ textAlign: "-webkit-center" }}>
                {/*<VideoModal
                  thumbnail={
                    data.contentfulIndex.heroVideoThumbnail.gatsbyImageData
                  }
                  url={data.contentfulIndex.heroVideoUrl}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
                {data.contentfulIndex.sobreUppertitle}
              </p>
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulIndex.sobreTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulIndex.sobreSubtitle.sobreSubtitle}
              </p>
              <div className="field is-grouped">
                <p className="control">
                  <Link
                    className="button has-text-weight-semibold is-primary"
                    to={data.contentfulIndex.sobreButton1Url}>
                    {data.contentfulIndex.sobreButton1Title}
                  </Link>
                </p>
                <p className="control">
                  <Link
                    className="button has-text-weight-semibold is-dark is-outlined"
                    to={data.contentfulIndex.sobreButton2Url}>
                    {data.contentfulIndex.sobreButton2Title}
                  </Link>
                </p>
              </div>
            </div>
            <div className="column is-6 is-offset-1 is-hidden-mobile">
              <figure className="image">
                <GatsbyImage
                  image={data.contentfulIndex.sobreImage.gatsbyImageData}
                  alt="image"
                  style={{ borderRadius: "4px", opacity: "0.9" }}></GatsbyImage>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <figure className="image">
                <GatsbyImage
                  image={data.contentfulIndex.modalidadesImage.gatsbyImageData}
                  alt="image"
                  style={{ borderRadius: "4px", opacity: "0.9" }}></GatsbyImage>
              </figure>
            </div>
            <div className="column is-5 is-offset-1">
              <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
                {data.contentfulIndex.modalidadesUppertitle}
              </p>
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulIndex.modalidadesTitle}
              </h2>
              <div className="content">
                <div className="icon-text is-align-items-center mb-2">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faSquareFull}
                      size="sm"
                      className="has-text-primary"
                    />
                  </span>
                  <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                    {data.contentfulIndex.modalidadesItem[0]}
                  </p>
                </div>
                <div className="icon-text is-align-items-center mb-2">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faSquareFull}
                      size="sm"
                      className="has-text-primary"
                    />
                  </span>
                  <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                    {data.contentfulIndex.modalidadesItem[1]}
                  </p>
                </div>
                <div className="icon-text is-align-items-center mb-2">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faSquareFull}
                      size="sm"
                      className="has-text-primary"
                    />
                  </span>
                  <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                    {data.contentfulIndex.modalidadesItem[2]}
                  </p>
                </div>
                <div className="icon-text is-align-items-center mb-2">
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={faSquareFull}
                      size="sm"
                      className="has-text-primary"
                    />
                  </span>
                  <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                    {data.contentfulIndex.modalidadesItem[3]}
                  </p>
                </div>
              </div>
              <Link
                className="button has-text-weight-semibold is-primary"
                to={data.contentfulIndex.modalidadesButtonUrl}>
                {data.contentfulIndex.modalidadesButtonTitle}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
                {data.contentfulIndex.midiaUppertitle}
              </p>
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulIndex.midiaTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulIndex.midiaSubtitle.midiaSubtitle}
              </p>
              <Link
                className="button has-text-weight-semibold is-primary"
                to={data.contentfulIndex.midiaButtonUrl}>
                {data.contentfulIndex.midiaButtonTitle}
              </Link>
            </div>
            <div className="column is-5 is-offset-2">
              <div className="columns is-multiline is-mobile">
                <div className="column is-6">
                  <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                    {data.contentfulIndex.midiaBlock.block1.title}
                  </h4>
                  <p className="subtitle is-6 has-text-weight-normal has-text-black">
                    {data.contentfulIndex.midiaBlock.block1.subtitle}
                  </p>
                </div>
                <div className="column is-6">
                  <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                    {data.contentfulIndex.midiaBlock.block2.title}
                  </h4>
                  <p className="subtitle is-6 has-text-weight-normal has-text-black">
                    {data.contentfulIndex.midiaBlock.block2.subtitle}
                  </p>
                </div>
                <div className="column is-6">
                  <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                    {data.contentfulIndex.midiaBlock.block3.title}
                  </h4>
                  <p className="subtitle is-6 has-text-weight-normal has-text-black">
                    {data.contentfulIndex.midiaBlock.block3.subtitle}
                  </p>
                </div>
                <div className="column is-6">
                  <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                    {data.contentfulIndex.midiaBlock.block4.title}
                  </h4>
                  <p className="subtitle is-6 has-text-weight-normal has-text-black">
                    {data.contentfulIndex.midiaBlock.block4.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
                {data.contentfulIndex.lojaUppertitle}
              </p>
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulIndex.lojaTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulIndex.lojaSubtitle.lojaSubtitle}
              </p>
            </div>
            <div className="column is-5">
              <div className="buttons is-hidden-tablet">
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulIndex.lojaButton1Url}>
                  {data.contentfulIndex.lojaButton1Title}
                </a>
                <a
                  className="button has-text-weight-semibold is-dark is-outlined"
                  href={data.contentfulIndex.lojaButton2Url}
                  rel="noreferrer"
                  target="_blank">
                  {data.contentfulIndex.lojaButton2Title}
                </a>
              </div>
              <div className="buttons is-right is-hidden-mobile">
                <a
                  className="button has-text-weight-semibold is-primary"
                  href={data.contentfulIndex.lojaButton1Url}>
                  {data.contentfulIndex.lojaButton1Title}
                </a>
                <a
                  className="button has-text-weight-semibold is-dark is-outlined"
                  href={data.contentfulIndex.lojaButton2Url}
                  rel="noreferrer"
                  target="_blank">
                  {data.contentfulIndex.lojaButton2Title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    contentfulIndex {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      heroButtonUrl
      heroButtonTitle
      heroVideoThumbnail {
        gatsbyImageData
      }
      heroVideoUrl
      sobreUppertitle
      sobreTitle
      sobreSubtitle {
        sobreSubtitle
      }
      sobreButton1Url
      sobreButton1Title
      sobreButton2Url
      sobreButton2Title
      sobreImage {
        gatsbyImageData
      }
      modalidadesImage {
        gatsbyImageData
      }
      modalidadesUppertitle
      modalidadesTitle
      modalidadesItem
      modalidadesButtonUrl
      modalidadesButtonTitle
      midiaUppertitle
      midiaTitle
      midiaSubtitle {
        midiaSubtitle
      }
      midiaButtonUrl
      midiaButtonTitle
      midiaBlock {
        block1 {
          title
          subtitle
        }
        block2 {
          title
          subtitle
        }
        block3 {
          title
          subtitle
        }
        block4 {
          title
          subtitle
        }
      }
      lojaUppertitle
      lojaTitle
      lojaSubtitle {
        lojaSubtitle
      }
      lojaButton1Url
      lojaButton1Title
      lojaButton2Url
      lojaButton2Title
    }
  }
`
