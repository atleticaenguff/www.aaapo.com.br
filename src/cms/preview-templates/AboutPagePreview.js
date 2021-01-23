import React from "react"
import PropTypes from "prop-types"
import AboutPageTemplate from "../../components/templates/AboutPageTemplate"

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryYears = entry.getIn(["data", "achievements", "years"])
  const years = entryYears ? entryYears.toJS() : []

  return (
    <AboutPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
      }}
      history={{
        title: entry.getIn(["data", "history", "title"]),
        image: getAsset(entry.getIn(["data", "history", "image"])),
        subtitle: {
          paragraph1: entry.getIn([
            "data",
            "history",
            "subtitle",
            "paragraph1",
          ]),
          paragraph2: entry.getIn([
            "data",
            "history",
            "subtitle",
            "paragraph2",
          ]),
          paragraph3: entry.getIn([
            "data",
            "history",
            "subtitle",
            "paragraph3",
          ]),
        },
      }}
      achievements={{
        title: entry.getIn(["data", "achievements", "title"]),
        years: [years],
      }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
