import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import ModalitiesCollapse from "../components/ModalitiesCollapse"

const ModalidadesPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulModalidades.metaTitle}
      metaDescriptionLayout={
        data.contentfulModalidades.metaDescription.metaDescription
      }>
      <section
        className="hero is-medium is-primary"
        style={{
          backgroundImage: `url(${BackgroundIcons})`,
          backgroundPosition: "center",
        }}>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
                  {data.contentfulModalidades.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulModalidades.heroSubtitle.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
                {data.contentfulModalidades.treinosTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulModalidades.treinosSubtitle.treinosSubtitle}
              </p>
            </div>
          </div>
          <div className="columns is-multiline mb-5">
            {data.allContentfulTreinos.edges.map(({ node }) => (
              <>
                {node.esportes.map(
                  ({
                    esporte,
                    situacao,
                    dias,
                    enderecosUrl,
                    enderecosTitle,
                    responsavelName,
                    responsavelPhone,
                  }) => (
                    <ModalitiesCollapse title={esporte} status={situacao}>
                      <div className="block mb-4">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Dias
                        </h6>
                        {dias[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {dias[0]}
                          </p>
                        ) : null}
                        {dias[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {dias[1]}
                          </p>
                        ) : null}
                        {dias[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {dias[2]}
                          </p>
                        ) : null}
                      </div>
                      <div className="block mb-4">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Endereço
                        </h6>
                        {(enderecosUrl[0] || enderecosTitle[0]) !==
                        undefined ? (
                          <a
                            className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                            href={enderecosUrl[0]}
                            rel="noreferrer"
                            target="_blank">
                            {enderecosTitle[0]}
                          </a>
                        ) : null}
                        {(enderecosUrl[1] || enderecosTitle[1]) !==
                        undefined ? (
                          <a
                            className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                            href={enderecosUrl[1]}
                            rel="noreferrer"
                            target="_blank">
                            {enderecosTitle[1]}
                          </a>
                        ) : null}
                        {(enderecosUrl[2] || enderecosTitle[2]) !==
                        undefined ? (
                          <a
                            className="subtitle is-6 has-text-weight-normal has-text-link is-block mb-0"
                            href={enderecosUrl[2]}
                            rel="noreferrer"
                            target="_blank">
                            {enderecosTitle[2]}
                          </a>
                        ) : null}
                      </div>
                      <div className="block">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Responsável
                        </h6>
                        {(responsavelName[0] || responsavelPhone[0]) !==
                        undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {responsavelName[0]}
                            {" - "}
                            <a
                              className="subtitle is-6 has-text-weight-normal has-text-link"
                              href={
                                "https://api.whatsapp.com/send?phone=55" +
                                responsavelPhone[0]
                              }
                              rel="noreferrer"
                              target="_blank">
                              WhatsApp
                            </a>
                          </p>
                        ) : null}
                        {(responsavelName[1] || responsavelPhone[1]) !==
                        undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {responsavelName[1]}
                            {" - "}
                            <a
                              className="subtitle is-6 has-text-weight-normal has-text-link"
                              href={
                                "https://api.whatsapp.com/send?phone=+55" +
                                responsavelPhone[1]
                              }
                              rel="noreferrer"
                              target="_blank">
                              WhatsApp
                            </a>
                          </p>
                        ) : null}
                        {(responsavelName[2] || responsavelPhone[2]) !==
                        undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {responsavelName[2]}
                            {" - "}
                            <a
                              className="subtitle is-6 has-text-weight-normal has-text-link"
                              href={
                                "https://api.whatsapp.com/send?phone=+55" +
                                responsavelPhone[2]
                              }
                              rel="noreferrer"
                              target="_blank">
                              WhatsApp
                            </a>
                          </p>
                        ) : null}
                      </div>
                    </ModalitiesCollapse>
                  )
                )}
              </>
            ))}
          </div>
          <div className="tags is-justify-content-center">
            <span className="tag is-dark has-text-weight-semibold">
              <span
                className="tag is-success mb-0 mr-2"
                style={{
                  width: "5px",
                  height: "5px",
                }}></span>
              Ativa
            </span>
            <span className="tag is-dark has-text-weight-semibold">
              <span
                className="tag is-warning mb-0 mr-2"
                style={{
                  width: "5px",
                  height: "5px",
                }}></span>
              Temp. inativa
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ModalidadesPage

export const query = graphql`
  query ModalidadesPage {
    contentfulModalidades {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      treinosTitle
      treinosSubtitle {
        treinosSubtitle
      }
    }
    allContentfulTreinos {
      edges {
        node {
          esportes {
            esporte
            situacao
            dias
            enderecosUrl
            enderecosTitle
            responsavelName
            responsavelPhone
          }
        }
      }
    }
  }
`
