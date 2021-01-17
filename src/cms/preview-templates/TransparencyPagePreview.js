import React from "react"
import PropTypes from "prop-types"
import TransparencyPageTemplate from "../../components/templates/TransparencyPageTemplate"

const TransparencyPagePreview = ({ entry }) => {
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
      report1={{
        title: entry.getIn(["data", "report1", "title"]),
        subtitle: entry.getIn(["data", "report1", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report1", "button", "url"]),
          title: entry.getIn(["data", "report1", "button", "title"]),
        },
      }}
      report2={{
        title: entry.getIn(["data", "report2", "title"]),
        subtitle: entry.getIn(["data", "report2", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report2", "button", "url"]),
          title: entry.getIn(["data", "report2", "button", "title"]),
        },
      }}
    />
  )
}

TransparencyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default TransparencyPagePreview
