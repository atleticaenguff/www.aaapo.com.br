import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import VideoModal from "../../components/VideoModal"
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const HomePageTemplate = ({ seo, hero, about, modalities, media, store }) => (
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
        backgroundImage: "url('/imagens/icones.svg')",
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
                to={hero.button.url}>
                {hero.button.title}
              </Link>
            </div>
            <div className="column" style={{ textAlign: "-webkit-center" }}>
              <VideoModal thumbnail={hero.video.thumbnail} id={hero.video.id} />
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
                  to={about.button1.url}>
                  {about.button1.title}
                </Link>
              </p>
              <p className="control">
                <Link
                  className="button has-text-weight-semibold is-dark is-outlined"
                  to={about.button2.url}>
                  {about.button2.title}
                </Link>
              </p>
            </div>
          </div>
          <div className="column is-6 is-offset-1 is-hidden-mobile">
            <figure className="image">
              <PreviewCompatibleImage imageInfo={about.image} alt="imagem" />
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
              <PreviewCompatibleImage
                imageInfo={modalities.image}
                alt="imagem"
              />
            </figure>
          </div>
          <div className="column is-5 is-offset-1">
            <p className="subtitle is-size-6-mobile has-text-weight-medium has-text-primary">
              {modalities.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {modalities.title}
            </h2>
            <div className="content">
              <div className="icon-text is-align-items-center mb-2">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.item1}
                </p>
              </div>
              <div className="icon-text is-align-items-center mb-2">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.item2}
                </p>
              </div>
              <div className="icon-text is-align-items-center mb-2">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.item3}
                </p>
              </div>
              <div className="icon-text is-align-items-center mb-2">
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="has-text-primary"
                  />
                </span>
                <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
                  {modalities.list.item4}
                </p>
              </div>
            </div>
            <Link
              className="button has-text-weight-semibold is-primary"
              to={modalities.button.url}>
              {modalities.button.title}
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
              {media.uppertitle}
            </p>
            <h2 className="title is-2 is-size-3-mobile has-text-weight-bold is-spaced has-text-dark">
              {media.title}
            </h2>
            <p className="subtitle is-size-6-mobile has-text-weight-normal has-text-black">
              {media.subtitle}
            </p>
            <Link
              className="button has-text-weight-semibold is-primary"
              to={media.button.url}>
              {media.button.title}
            </Link>
          </div>
          <div className="column is-5 is-offset-2">
            <div className="columns is-multiline is-mobile">
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {media.block1.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {media.block1.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {media.block2.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {media.block2.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {media.block3.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {media.block3.undersubtitle}
                </p>
              </div>
              <div className="column is-6">
                <h4 className="title is-4 is-size-5-mobile has-text-weight-bold is-spaced has-text-dark">
                  {media.block4.undertitle}
                </h4>
                <p className="subtitle is-6 has-text-weight-normal has-text-black">
                  {media.block4.undersubtitle}
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
                href={store.button1.url}>
                {store.button1.title}
              </a>
              <a
                className="button has-text-weight-semibold is-dark is-outlined"
                href={store.button2.url}
                rel="noreferrer"
                target="_blank">
                {store.button2.title}
              </a>
            </div>
            <div className="buttons is-right is-hidden-mobile">
              <a
                className="button has-text-weight-semibold is-primary"
                href={store.button1.url}>
                {store.button1.title}
              </a>
              <a
                className="button has-text-weight-semibold is-dark is-outlined"
                href={store.button2.url}
                rel="noreferrer"
                target="_blank">
                {store.button2.title}
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
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    video: PropTypes.shape({
      thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      id: PropTypes.string,
    }),
  }),
  about: PropTypes.shape({
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button1: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    button2: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  modalities: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.shape({
      item1: PropTypes.string,
      item2: PropTypes.string,
      item3: PropTypes.string,
      item4: PropTypes.string,
    }),
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  media: PropTypes.shape({
    uppertitle: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
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
    button1: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
    button2: PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}

export default HomePageTemplate
