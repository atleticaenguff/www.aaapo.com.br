import React from "react"
import PropTypes from "prop-types"
import ContactPageTemplate from "../../components/templates/ContactPageTemplate"

const ContactPagePreview = ({ entry }) => {
  return (
    <ContactPageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
      }}
      contact1={{
        title: entry.getIn(["data", "contact1", "title"]),
        subtitle: entry.getIn(["data", "contact1", "subtitle"]),
        email: entry.getIn(["data", "contact1", "email"]),
      }}
      contact2={{
        title: entry.getIn(["data", "contact2", "title"]),
        subtitle: entry.getIn(["data", "contact2", "subtitle"]),
        email: entry.getIn(["data", "contact2", "email"]),
      }}
      local={{
        title: entry.getIn(["data", "local", "title"]),
        subtitle: entry.getIn(["data", "local", "subtitle"]),
        url: entry.getIn(["data", "local", "url"]),
        email: entry.getIn(["data", "local", "email"]),
      }}
      map={{
        latitude: entry.getIn(["data", "map", "latitude"]),
        longitude: entry.getIn(["data", "map", "longitude"]),
      }}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
