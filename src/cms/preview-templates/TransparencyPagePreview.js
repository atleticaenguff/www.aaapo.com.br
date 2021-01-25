import React from "react"
import PropTypes from "prop-types"
import TransparencyPageTemplate from "../../components/templates/TransparencyPageTemplate"

const TransparencyPagePreview = ({ entry }) => {
  const entryReports = entry.getIn(["data", "reports"])
  const reports = entryReports ? entryReports.toJS() : []

  return (
    <TransparencyPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
      }}
      reports={reports}
    />
  )
}

TransparencyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default TransparencyPagePreview
