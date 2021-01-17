import React from "react"
import PropTypes from "prop-types"
import ModalitiesPageTemplate from "../../components/templates/ModalitiesPageTemplate"

const ModalitiesPagePreview = ({ entry }) => {
  const entryCollapses = entry.getIn(["data", "collapses"])
  const collapses = entryCollapses ? entryCollapses.toJS() : []

  return (
    <ModalitiesPageTemplate
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
        subtitle: entry.getIn(["data", "history", "subtitle"]),
      }}
      collapses={collapses}
    />
  )
}

ModalitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ModalitiesPagePreview
