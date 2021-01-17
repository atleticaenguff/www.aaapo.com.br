import React from "react"
import PropTypes from "prop-types"
import NotFoundPageTemplate from "../../components/templates/NotFoundPageTemplate"

const NotFoundPagePreview = ({ entry }) => {
  return (
    <NotFoundPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
        button: entry.getIn(["data", "hero", "button"]),
      }}
    />
  )
}

NotFoundPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default NotFoundPagePreview
