import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import VideoModal from "../../components/VideoModal"
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const HomePageTemplate = ({ seo, hero, about, modalities, extras, store }) => (
  <>
    <Helmet>
      <title>{seo.meta_title}</title>
      <meta name="title" content={seo.meta_title} />
      <meta name="description" content={seo.meta_description} />
      <meta property="og:title" content={seo.meta_title} />
      <meta property="og:description" content={seo.meta_description} />
      <meta name="twitter:title" content={seo.meta_title} />
      <meta name="twitter:description" content={seo.meta_description} />
    </Helmet>
    <section
      className="hero is-primary"
      style={{
        backgroundImage: "url('/images/icons.svg')",
        backgroundPosition: "center",
      }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title is-1 is-size-2-mobile has-text-weight-semibold is-spaced">
                {hero.title}
              </h1>
              <p className="subtitle is-size-6-mobile has-text-weight-medium">
                {hero.subtitle}
              </p>
              <Link
                className="button has-text-weight-semibold is-dark"
                to="/about">
                {hero.button}
              </Link>
            </div>
            <div className="column" style={{ textAlign: "-webkit-center" }}>
              <VideoModal thumbnail={hero.thumbnail} id={hero.id} />
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
              {about.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {about.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {about.subtitle}
            </p>
            <div className="field is-grouped">
              <p className="control">
                <Link
                  className="button has-text-weight-semibold is-primary"
                  to="/about">
                  {about.button1}
                </Link>
              </p>
              <p className="control">
                <Link
                  className="button has-text-weight-semibold is-dark is-outlined"
                  to="/about#awards">
                  {about.button2}
                </Link>
              </p>
            </div>
          </div>
          <div className="column is-6 is-offset-1 is-hidden-mobile">
            <figure className="image">
              <PreviewCompatibleImage imageInfo={about.image} alt="" />
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
              <PreviewCompatibleImage imageInfo={modalities.image} alt="" />
            </figure>
          </div>
          <div className="column is-5 is-offset-1">
            <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
              {modalities.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {modalities.title}
            </h2>
            <ul className="margin">
              <li className="is-flex is-align-items-center mb-2">
                <span className="icon mr-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.list1}
                </p>
              </li>
              <li className="is-flex is-align-items-center mb-2">
                <span className="icon mr-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.list2}
                </p>
              </li>
              <li className="is-flex is-align-items-center mb-2">
                <span className="icon mr-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.list3}
                </p>
              </li>
              <li className="is-flex is-align-items-center mb-2">
                <span className="icon mr-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.list4}
                </p>
              </li>
            </ul>
            <Link
              className="button has-text-weight-semibold is-primary mt-4"
              to="/modalities">
              {modalities.button}
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
              {extras.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {extras.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {extras.subtitle}
            </p>
            <Link
              className="button has-text-weight-semibold is-primary"
              to="/extras">
              {extras.button}
            </Link>
          </div>
          <div className="column is-5 is-offset-2">
            <div className="columns is-multiline is-mobile">
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {extras.block1.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {extras.block1.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {extras.block2.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {extras.block2.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {extras.block3.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {extras.block3.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {extras.block4.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {extras.block4.undersubtitle}
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
              {store.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {store.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {store.subtitle}
            </p>
          </div>

          <div className="column is-5">
            <div className="buttons is-hidden-tablet">
              <a
                className="button has-text-weight-semibold is-primary"
                href="https://aaapo-teste.lojaintegrada.com.br">
                {store.button1}
              </a>
              <a
                className="button has-text-weight-semibold is-dark is-outlined"
                href="https://atleticaenguff.eventbrite.com"
                rel="noreferrer"
                target="_blank">
                {store.button2}
              </a>
            </div>
            <div className="buttons is-right is-hidden-mobile">
              <a
                className="button has-text-weight-semibold is-primary"
                href="https://aaapo-teste.lojaintegrada.com.br">
                {store.button1}
              </a>
              <a
                className="button has-text-weight-semibold is-dark is-outlined"
                href="https://atleticaenguff.eventbrite.com"
                rel="noreferrer"
                target="_blank">
                {store.button2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

HomePageTemplate.propTypes = {
  seo: PropTypes.shape({
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
  }),
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.string,
    thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    id: PropTypes.string,
  }),
  about: PropTypes.shape({
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button1: PropTypes.string,
    button2: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  modalities: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.shape({
      list1: PropTypes.string,
      list2: PropTypes.string,
      list3: PropTypes.string,
      list4: PropTypes.string,
    }),
    button: PropTypes.string,
  }),
  extras: PropTypes.shape({
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.string,
    block1: PropTypes.shape({
      undertitle: PropTypes.string,
      undersubtitle: PropTypes.string,
    }),
    block2: PropTypes.shape({
      undertitle: PropTypes.string,
      undersubtitle: PropTypes.string,
    }),
    block3: PropTypes.shape({
      undertitle: PropTypes.string,
      undersubtitle: PropTypes.string,
    }),
    block4: PropTypes.shape({
      undertitle: PropTypes.string,
      undersubtitle: PropTypes.string,
    }),
  }),
  store: PropTypes.shape({
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button1: PropTypes.string,
    button2: PropTypes.string,
  }),
}

export default HomePageTemplate
