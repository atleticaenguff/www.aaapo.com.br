{/*import React, { Component } from "react"

class AnnouncementBar extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/" +
        process.env.GOOGLE_SHEETS_API_ID +
        "/values/Página1!A1:B5?key=" +
        process.env.GOOGLE_SHEETS_API_KEY
    )
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          loading: false,
          isHidden: json.values[0][1],
          content: json.values[1][1],
          isHiddenLink: json.values[2][1],
          linkText: json.values[3][1],
          linkURL: json.values[4][1],
        })
      })
  }

  render() {
    const { loading, isHidden, content, isHiddenLink, linkText, linkURL } =
      this.state

    return (
      <div
        className={
          loading === true || isHidden === "TRUE" ? "is-hidden" : null
        }>
        <div
          className={"has-text-white p-4"}
          style={{
            backgroundColor: "#262626",
          }}>
          <div className="container">
            {loading ? (
              <>&nbsp;</>
            ) : (
              <div className="has-text-centered is-flex is-align-items-center is-justify-content-center">
                <p className="has-text-weight-semibold">{content}</p>
                <span
                  className={isHiddenLink === "TRUE" ? "is-hidden" : "is-flex"}>
                  &nbsp;
                  <p className="has-text-weight-semibold">-</p>
                  &nbsp;
                  <p className="has-text-weight-bold">
                    <a href={linkURL} rel="noreferrer" target="_blank">
                      {linkText}
                    </a>
                  </p>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AnnouncementBar
*/}