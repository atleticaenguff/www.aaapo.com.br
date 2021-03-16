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
      <div className={collapseState ? "mb-2" : "mb-1"}>
        <header className="collapse-header is-flex is-align-items-baseline">
          <p
            className="subtitle has-text-weight-semibold has-text-dark is-marginless is-clickable"
            aria-disabled="false"
            aria-expanded={collapseState ? "true" : "false"}
            onClick={this.toggleCollapseState}>
            {title}
          </p>
          <span
            className="icon is-clickable"
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
          className="collapse-body is-clipped"
          style={{
            maxHeight: collapseState ? "100em" : "0em",
          }}>
          {children}
        </div>
      </div>
    )
  }
}

export default Collapse
