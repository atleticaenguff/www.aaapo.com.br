import React, { Component } from "react"
import Helmet from "react-helmet"
import "./Layout.scss"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <>
        <Helmet defer={false}>
          <html lang="pt-BR" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default Layout
