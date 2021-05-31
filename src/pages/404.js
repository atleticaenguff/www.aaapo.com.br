import React from "react"
import Seo from "../components/Seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  const metaTitle = "Página não encontrada | Atlética Engenharia UFF"
  const metaDescription =
    "Verifique a URL inserida ou volte para a página inicial - Atlética Engenharia UFF."

  return (
    <>
      <Seo metaTitleSeo={metaTitle} metaDescriptionSeo={metaDescription}></Seo>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 is-size-2-mobile has-text-weight-bold is-spaced">
              Página não encontrada
            </h1>
            <p className="subtitle is-size-6-mobile has-text-weight-medium">
              Desculpa{" "}
              <span role="img" aria-label="emoji">
                😔
              </span>{" "}
              — não conseguimos achar o que você está procurando.
            </p>
            <Link className="button has-text-weight-semibold is-ghost" to="/">
              Ir para a página inicial
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
