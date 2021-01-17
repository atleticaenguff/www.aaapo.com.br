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
        button: entry.getIn(["data", "hero", "button"]),
        thumbnail: getAsset(entry.getIn(["data", "hero", "thumbnail"])),
        url: entry.getIn(["data", "hero", "url"]),
      }}
      about={{
        uppertitle: entry.getIn(["data", "about", "uppertitle"]),
        title: entry.getIn(["data", "about", "title"]),
        subtitle: entry.getIn(["data", "about", "subtitle"]),
        button1: entry.getIn(["data", "about", "button1"]),
        button2: entry.getIn(["data", "about", "button2"]),
        image: getAsset(entry.getIn(["data", "about", "image"])),
      }}
      modalities={{
        image: getAsset(entry.getIn(["data", "modalities", "image"])),
        uppertitle: entry.getIn(["data", "modalities", "uppertitle"]),
        title: entry.getIn(["data", "modalities", "title"]),
        list: {
          list1: entry.getIn(["data", "modalities", "list", "list1"]),
          list2: entry.getIn(["data", "modalities", "list", "list2"]),
          list3: entry.getIn(["data", "modalities", "list", "list3"]),
          list4: entry.getIn(["data", "modalities", "list", "list4"]),
        },
        button: entry.getIn(["data", "modalities", "button"]),
      }}
      extras={{
        uppertitle: entry.getIn(["data", "extras", "uppertitle"]),
        title: entry.getIn(["data", "extras", "title"]),
        subtitle: entry.getIn(["data", "extras", "subtitle"]),
        button: entry.getIn(["data", "extras", "button"]),
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
        button1: entry.getIn(["data", "store", "button1"]),
        button2: entry.getIn(["data", "store", "button2"]),
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
