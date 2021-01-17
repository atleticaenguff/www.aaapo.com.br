import React from "react"
import PropTypes from "prop-types"
import ExtrasPageTemplate from "../../components/templates/ExtrasPageTemplate"

const ExtrasPagePreview = ({ entry }) => {
  return (
    <ExtrasPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
      }}
      features={{
        title: entry.getIn(["data", "features", "title"]),
        subtitle: entry.getIn(["data", "features", "subtitle"]),
        feature1: {
          title: entry.getIn(["data", "features", "feature1", "title"]),
          subtitle: entry.getIn(["data", "features", "feature1", "subtitle"]),
          button: {
            url: entry.getIn(["data", "features", "feature1", "button", "url"]),
            title: entry.getIn([
              "data",
              "features",
              "feature1",
              "button",
              "title",
            ]),
          },
        },
        feature2: {
          title: entry.getIn(["data", "features", "feature2", "title"]),
          subtitle: entry.getIn(["data", "features", "feature2", "subtitle"]),
          button: {
            url: entry.getIn(["data", "features", "feature2", "button", "url"]),
            title: entry.getIn([
              "data",
              "features",
              "feature2",
              "button",
              "title",
            ]),
          },
        },
        feature3: {
          title: entry.getIn(["data", "features", "feature3", "title"]),
          subtitle: entry.getIn(["data", "features", "feature3", "subtitle"]),
          button: {
            url: entry.getIn(["data", "features", "feature3", "button", "url"]),
            title: entry.getIn([
              "data",
              "features",
              "feature3",
              "button",
              "title",
            ]),
          },
        },
      }}
      soundcloud={{
        title: entry.getIn(["data", "soundcloud", "title"]),
        subtitle: entry.getIn(["data", "soundcloud", "subtitle"]),
      }}
    />
  )
}

ExtrasPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ExtrasPagePreview
