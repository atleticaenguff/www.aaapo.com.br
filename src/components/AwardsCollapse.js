/* eslint-disable */
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

class Collapse extends Component {
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
      <div className={collapseState ? "mb-2" : "mb-0"}>
        <header
          className="collapse-header is-flex"
          style={{ alignItems: "center" }}>
          <p
            className="subtitle has-text-weight-bold has-text-dark is-marginless"
            aria-disabled="false"
            aria-expanded={collapseState ? "true" : "false"}
            style={{ cursor: "pointer" }}
            onClick={this.toggleCollapseState}>
            {title}
          </p>
          <span
            className="icon"
            style={{ cursor: "pointer" }}
            onClick={this.toggleCollapseState}>
            <FontAwesomeIcon
              icon={collapseState ? faMinus : faPlus}
              size="sm"
              className="has-text-black"
              transform="shrink-5"
            />
          </span>
        </header>
        <div
          className="collapse-body"
          style={{
            maxHeight: collapseState ? "100em" : "0em",
            overflow: "hidden",
          }}>
          {children}
        </div>
      </div>
    )
  }
}

export default Collapse
