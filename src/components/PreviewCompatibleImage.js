import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const isRounded = { borderRadius: "6px" }

const PreviewCompatibleImage = ({ imageInfo, alt }) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} style={isRounded} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} style={isRounded} />
  }

  if (!!image && typeof image === "string")
    return <img src={image} alt={alt} style={isRounded} />

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
