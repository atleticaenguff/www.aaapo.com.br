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
      report3={{
        title: entry.getIn(["data", "report3", "title"]),
        subtitle: entry.getIn(["data", "report3", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report3", "button", "url"]),
          title: entry.getIn(["data", "report3", "button", "title"]),
        },
      }}
      report4={{
        title: entry.getIn(["data", "report4", "title"]),
        subtitle: entry.getIn(["data", "report4", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report4", "button", "url"]),
          title: entry.getIn(["data", "report4", "button", "title"]),
        },
      }}
      report5={{
        title: entry.getIn(["data", "report5", "title"]),
        subtitle: entry.getIn(["data", "report5", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report5", "button", "url"]),
          title: entry.getIn(["data", "report5", "button", "title"]),
        },
      }}
      report6={{
        title: entry.getIn(["data", "report6", "title"]),
        subtitle: entry.getIn(["data", "report6", "subtitle"]),
        button: {
          url: entry.getIn(["data", "report6", "button", "url"]),
          title: entry.getIn(["data", "report6", "button", "title"]),
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
