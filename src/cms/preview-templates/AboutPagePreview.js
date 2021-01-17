import React from "react"
import PropTypes from "prop-types"
import AboutPageTemplate from "../../components/templates/AboutPageTemplate"

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryYears = entry.getIn(["data", "years"])
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
        subtitle1: entry.getIn(["data", "history", "subtitle1"]),
        subtitle2: entry.getIn(["data", "history", "subtitle2"]),
        subtitle3: entry.getIn(["data", "history", "subtitle3"]),
      }}
      achievement={{
        title: entry.getIn(["data", "achievement", "title"]),
      }}
      years={years}
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
