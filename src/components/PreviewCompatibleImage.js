import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const isStyled = { borderRadius: "6px", opacity: "0.9" }

const PreviewCompatibleImage = ({ imageInfo, alt }) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} style={isStyled} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} style={isStyled} />
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
