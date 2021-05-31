import React, { Component } from "react"
import { globalHistory as history } from "@reach/router"
import Helmet from "react-helmet"
import seo from "../data/seo.json"

const { location } = history

class Seo extends Component {
  render() {
    const { metaTitleSeo, metaDescriptionSeo } = this.props

    const breadcrumbSchemaOrgJSONLD = {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: seo.url + location.pathname,
      logo: seo.url + seo.image,
    }

    return (
      <Helmet defer={false}>
        {/* General tags */}
        <title>{metaTitleSeo}</title>
        <meta name="title" content={metaTitleSeo} />
        <meta name="description" content={metaDescriptionSeo} />
        <meta name="image" content={seo.url + seo.image} />
        <link rel="canonical" href={seo.url + location.pathname} />
        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.url + location.pathname} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={metaTitleSeo} />
        <meta property="og:description" content={metaDescriptionSeo} />
        <meta property="og:image" content={seo.url + seo.image} />
        <meta property="fb:app_id" content={seo.fb_app_id} />
        {/* Twitter Cards tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={seo.twitter_user} />
        <meta name="twitter:creator" content={seo.twitter_user} />
        <meta name="twitter:title" content={metaTitleSeo} />
        <meta name="twitter:description" content={metaDescriptionSeo} />
        <meta name="twitter:image" content={seo.url + seo.image} />
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
        </script>
      </Helmet>
    )
  }
}

export default Seo
