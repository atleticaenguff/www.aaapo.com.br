/* eslint-disable */
import React, { Component } from "react"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faPlay } from "@fortawesome/free-solid-svg-icons"

class VideoModal extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ isActive: !this.state.isActive })
    var html = document.querySelector("html")
    html.classList.add("is-clipped")
  }

  closeModal() {
    this.setState({ isActive: !this.state.isActive })
    var html = document.querySelector("html")
    html.classList.remove("is-clipped")
  }

  render() {
    const thumbnail = this.props.thumbnail
    const id = this.props.id

    return (
      <>
        <figure className="image" style={{ maxWidth: "500px" }}>
          <PreviewCompatibleImage imageInfo={thumbnail} alt="video" />
          <span
            role="button"
            tabIndex={0}
            className="icon is-large fa-layers fa-fw is-overlay is-clickable"
            style={{
              top: "50%",
              left: "50%",
              outline: "0",
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => this.openModal()}
            aria-label="video">
            <FontAwesomeIcon
              icon={faCircle}
              size="3x"
              className="has-text-white-ter"
              transform="grow-20"
            />
            <FontAwesomeIcon
              icon={faCircle}
              size="2x"
              className="has-text-white-ter"
              transform="grow-20"
            />
            <FontAwesomeIcon
              icon={faPlay}
              size="1x"
              className="has-text-white"
              transform="grow-15"
            />
          </span>
          {this.state.isActive ? (
            <div className="modal is-active">
              <div
                className="modal-background"
                onClick={() => this.closeModal()}
              />
              <div className="modal-content">
                <div
                  className="video-wrapper"
                  style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    title="YouTube"
                    allowFullScreen
                    src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}></iframe>
                </div>
              </div>
              <button
                className="modal-close is-large"
                onClick={() => this.closeModal()}
                aria-label="fechar"></button>
            </div>
          ) : null}
        </figure>
      </>
    )
  }
}

export default VideoModal
