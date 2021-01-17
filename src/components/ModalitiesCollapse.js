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
        <div className="card" style={{ borderRadius: "6px" }}>
          <header
            className="card-header"
            style={{
              borderRadius: collapseState ? null : "6px",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              cursor: "pointer",
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
                  transition: "transform 300ms ease-out",
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
            className="card-body"
            style={{
              borderBottomLeftRadius: "6px",
              borderBottomRightRadius: "6px",
              maxHeight: collapseState ? "100em" : "0em",
              overflow: "hidden",
              transition: "all 300ms ease-in-out",
            }}>
            <div className="card-content">{children}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalitiesCollapse
