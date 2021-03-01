import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"

const isStyled = { borderRadius: "4px", opacity: "0.9" }

const PreviewCompatibleImage = ({ imageInfo, alt }) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
        style={isStyled}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        alt={alt}
        style={isStyled}
      />
    )
  }

  if (!!image && typeof image === "string")
    return <img src={image} alt={alt} style={isStyled} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  alt: PropTypes.string,
}

export default PreviewCompatibleImage
