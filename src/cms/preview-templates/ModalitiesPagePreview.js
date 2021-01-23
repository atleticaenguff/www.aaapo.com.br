import React from "react"
import PropTypes from "prop-types"
import ModalitiesPageTemplate from "../../components/templates/ModalitiesPageTemplate"

const ModalitiesPagePreview = ({ entry }) => {
  const entryCollapses = entry.getIn(["data", "modalities", "collapses"])
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
      modalities={{
        title: entry.getIn(["data", "modalities", "title"]),
        subtitle: entry.getIn(["data", "modalities", "subtitle"]),
        collapses: [collapses],
      }}
    />
  )
}

ModalitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ModalitiesPagePreview
