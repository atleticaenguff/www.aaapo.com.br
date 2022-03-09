import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundIcons from "../images/icones.svg"
import AreaDosCalourosCollapse from "../components/AreaDosCalourosCollapse"

const AreaCalouroPage = ({ data }) => {
  return (
    <Layout
      metaTitleLayout={data.contentfulAreaDoCalouro.metaTitle}
      metaDescriptionLayout={
        data.contentfulAreaDoCalouro.metaDescription.metaDescription
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
                  {data.contentfulAreaDoCalouro.heroTitle}
                </h1>
                <p className="subtitle is-size-6-mobile has-text-weight-medium">
                  {data.contentfulAreaDoCalouro.heroSubtitle.heroSubtitle}
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
                {data.contentfulAreaDoCalouro.cursosTitle}
              </h2>
              <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                {data.contentfulAreaDoCalouro.cursosSubtitle.cursosSubtitle}
              </p>
            </div>
          </div>
          <div className="columns is-multiline mb-5">
            {data.allContentfulCursos.edges.map(({ node }) => (
              <>
                {node.salas.map(
                  ({
                    cursosEngenharia,
                    diretoriosInstagram,
                    diretoriosTitle,
                    diretoriosLocalizacao,
                    coordenadores,
                    coordenacaoSala,
                    coordenacaoEmail,
                    coordenacaoTelefone,
                  }) => (
                    <AreaDosCalourosCollapse title={cursosEngenharia}>
                      <div className="block mb-4">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Diretório
                        </h6>
                        {(diretoriosTitle || diretoriosInstagram) !==
                        undefined ? (
                          <a
                            className="subtitle is-6 has-text-weight-normal has-text-link"
                            href={diretoriosInstagram}
                            rel="noreferrer"
                            target="_blank">
                            {diretoriosTitle}
                          </a>
                        ) : null}
                        {diretoriosLocalizacao[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {diretoriosLocalizacao[0]}
                          </p>
                        ) : null}
                        {diretoriosLocalizacao[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {diretoriosLocalizacao[1]}
                          </p>
                        ) : null}
                        {diretoriosLocalizacao[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {diretoriosLocalizacao[2]}
                          </p>
                        ) : null}
                      </div>
                      <div className="block mb-4">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Coordenação
                        </h6>
                        {coordenadores[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenadores[0]}
                          </p>
                        ) : null}
                        {coordenadores[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenadores[1]}
                          </p>
                        ) : null}
                        {coordenadores[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenadores[2]}
                          </p>
                        ) : null}
                      </div>
                      <div className="block">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Localização
                        </h6>
                        {coordenacaoSala[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoSala[0]}
                          </p>
                        ) : null}
                        {coordenacaoSala[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoSala[1]}
                          </p>
                        ) : null}
                        {coordenacaoSala[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoSala[2]}
                          </p>
                        ) : null}
                      </div>
                      <div className="block">
                        <h6 className="title is-6 has-text-weight-bold is-spaced has-text-black mb-2">
                          Contato
                        </h6>
                        {coordenacaoEmail[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoEmail[0]}
                          </p>
                        ) : null}
                        {coordenacaoEmail[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoEmail[1]}
                          </p>
                        ) : null}
                        {coordenacaoEmail[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoEmail[2]}
                          </p>
                        ) : null}
                        {coordenacaoTelefone[0] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoTelefone[0]}
                          </p>
                        ) : null}
                        {coordenacaoTelefone[1] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoTelefone[1]}
                          </p>
                        ) : null}
                        {coordenacaoTelefone[2] !== undefined ? (
                          <p className="subtitle is-6 has-text-weight-normal has-text-black mb-0">
                            {coordenacaoTelefone[2]}
                          </p>
                        ) : null}
                      </div>
                    </AreaDosCalourosCollapse>
                  )
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AreaCalouroPage

export const query = graphql`
  query AreaCalouroPage {
    contentfulAreaDoCalouro {
      metaTitle
      metaDescription {
        metaDescription
      }
      heroTitle
      heroSubtitle {
        heroSubtitle
      }
      cursosTitle
      cursosSubtitle {
        cursosSubtitle
      }
    }
    allContentfulCursos {
      edges {
        node {
          salas {
            cursosEngenharia
            diretoriosInstagram
            diretoriosTitle
            diretoriosLocalizacao
            coordenadores
            coordenacaoSala
            coordenacaoEmail
            coordenacaoTelefone
          }
        }
      }
    }
  }
`
