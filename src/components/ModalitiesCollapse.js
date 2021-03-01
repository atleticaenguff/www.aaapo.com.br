/* eslint-disable */
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"

class ModalitiesCollapse extends Component {
  constructor(props) {
    super(props)
    this.state = { collapseState: false }
    this.toggleCollapseState = this.toggleCollapseState.bind(this)
  }

  toggleCollapseState() {
    this.setState({ collapseState: !this.state.collapseState })
  }

  render() {
    const { title, children } = this.props
    const { collapseState } = this.state

    return (
      <div className="column is-6">
        <div className="card">
          <header
            className="card-header is-clickable"
            style={{
              borderRadius: collapseState ? null : "4px",
            }}
            onClick={this.toggleCollapseState}>
            <p
              className="card-header-title"
              aria-disabled="false"
              aria-expanded={collapseState ? "true" : "false"}
              style={{
                fontSize: "1.1rem",
              }}>
              {title}
            </p>
            <a className="card-header-icon">
              <span
                className="icon"
                style={{
                  transform: collapseState ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 200ms ease-out",
                }}>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  size="lg"
                  className="has-text-white"
                />
              </span>
            </a>
          </header>
          <div
            className="card-body is-clipped"
            style={{
              maxHeight: collapseState ? "100em" : "0em",
              transition: "all 200ms ease-in-out",
            }}>
            <div
              className="card-content"
              style={{
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
              }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalitiesCollapse
