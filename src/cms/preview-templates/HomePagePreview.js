import React from "react"
import PropTypes from "prop-types"
import HomePageTemplate from "../../components/templates/HomePageTemplate"

const HomePagePreview = ({ entry, getAsset }) => {
  return (
    <HomePageTemplate
      seo={{
        meta_title: entry.getIn(["data", "seo", "meta_title"]),
        meta_description: entry.getIn(["data", "seo", "meta_description"]),
      }}
      hero={{
        title: entry.getIn(["data", "hero", "title"]),
        subtitle: entry.getIn(["data", "hero", "subtitle"]),
        button: {
          url: entry.getIn(["data", "hero", "button", "url"]),
          title: entry.getIn(["data", "hero", "button", "title"]),
        },
        video: {
          thumbnail: getAsset(
            entry.getIn(["data", "hero", "video", "thumbnail"])
          ),
          id: entry.getIn(["data", "hero", "video", "id"]),
        },
      }}
      about={{
        uppertitle: entry.getIn(["data", "about", "uppertitle"]),
        title: entry.getIn(["data", "about", "title"]),
        subtitle: entry.getIn(["data", "about", "subtitle"]),
        button1: {
          url: entry.getIn(["data", "about", "button1", "url"]),
          title: entry.getIn(["data", "about", "button1", "title"]),
        },
        button2: {
          url: entry.getIn(["data", "about", "button2", "url"]),
          title: entry.getIn(["data", "about", "button2", "title"]),
        },
        image: getAsset(entry.getIn(["data", "about", "image"])),
      }}
      modalities={{
        image: getAsset(entry.getIn(["data", "modalities", "image"])),
        uppertitle: entry.getIn(["data", "modalities", "uppertitle"]),
        title: entry.getIn(["data", "modalities", "title"]),
        list: {
          item1: entry.getIn(["data", "modalities", "list", "item1"]),
          item2: entry.getIn(["data", "modalities", "list", "item2"]),
          item3: entry.getIn(["data", "modalities", "list", "item3"]),
          item4: entry.getIn(["data", "modalities", "list", "item4"]),
        },
        button: {
          url: entry.getIn(["data", "modalities", "button", "url"]),
          title: entry.getIn(["data", "modalities", "button", "title"]),
        },
      }}
      extras={{
        uppertitle: entry.getIn(["data", "extras", "uppertitle"]),
        title: entry.getIn(["data", "extras", "title"]),
        subtitle: entry.getIn(["data", "extras", "subtitle"]),
        button: {
          url: entry.getIn(["data", "extras", "button", "url"]),
          title: entry.getIn(["data", "extras", "button", "title"]),
        },
        block1: {
          undertitle: entry.getIn(["data", "extras", "block1", "undertitle"]),
          undersubtitle: entry.getIn([
            "data",
            "extras",
            "block1",
            "undersubtitle",
          ]),
        },
        block2: {
          undertitle: entry.getIn(["data", "extras", "block2", "undertitle"]),
          undersubtitle: entry.getIn([
            "data",
            "extras",
            "block2",
            "undersubtitle",
          ]),
        },
        block3: {
          undertitle: entry.getIn(["data", "extras", "block3", "undertitle"]),
          undersubtitle: entry.getIn([
            "data",
            "extras",
            "block3",
            "undersubtitle",
          ]),
        },
        block4: {
          undertitle: entry.getIn(["data", "extras", "block4", "undertitle"]),
          undersubtitle: entry.getIn([
            "data",
            "extras",
            "block4",
            "undersubtitle",
          ]),
        },
      }}
      store={{
        uppertitle: entry.getIn(["data", "store", "uppertitle"]),
        title: entry.getIn(["data", "store", "title"]),
        subtitle: entry.getIn(["data", "store", "subtitle"]),
        button1: {
          url: entry.getIn(["data", "store", "button1", "url"]),
          title: entry.getIn(["data", "store", "button1", "title"]),
        },
        button2: {
          url: entry.getIn(["data", "store", "button2", "url"]),
          title: entry.getIn(["data", "store", "button2", "title"]),
        },
      }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
