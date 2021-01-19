import React, { Component } from "react"
import Helmet from "react-helmet"
import "../assets/sass/styles.scss"
import SEO from "./SEO"
import AnnouncementBar from "./AnnouncementBar"
import NavBar from "./NavBar"
import Footer from "./Footer"

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
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SEO></SEO>
        <AnnouncementBar></AnnouncementBar>
        <NavBar
          isActive={this.state.isActive}
          toggleNavbar={() => this.toggleNavbar()}
        />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
