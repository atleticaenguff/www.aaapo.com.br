import React from "react"
import PropTypes from "prop-types"
import FaqPageTemplate from "../../components/templates/FaqPageTemplate"

const FaqPagePreview = ({ entry }) => {
  const entryFaqs = entry.getIn(["data", "faqs"])
  const faqs = entryFaqs ? entryFaqs.toJS() : []

  return (
    <FaqPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
      }}
      faqs={faqs}
    />
  )
}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FaqPagePreview
