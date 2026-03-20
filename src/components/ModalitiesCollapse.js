import React, { Component } from "react"

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
    const { title, status, children } = this.props
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
              {status ? (
                <span
                  className="tag is-success mr-2"
                  style={{
                    width: "5px",
                    height: "5px",
                  }}></span>
              ) : (
                <span
                  className="tag is-warning mr-2"
                  style={{
                    width: "5px",
                    height: "5px",
                  }}></span>
              )}
              {title}
            </p>
            <a className="card-header-icon">
              <span
                className="icon"
                style={{
                  transform: collapseState ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 200ms ease-out",
                }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "white" }}>
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
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