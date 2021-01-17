import CMS from "netlify-cms-app"
import "../assets/sass/styles.scss"
import HomePagePreview from "./preview-templates/HomePagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"
import ModalitiesPagePreview from "./preview-templates/ModalitiesPagePreview"
import ExtrasPagePreview from "./preview-templates/ExtrasPagePreview"
import ContactPagePreview from "./preview-templates/ContactPagePreview"
import FaqPagePreview from "./preview-templates/FaqPagePreview"
import NotFoundPagePreview from "./preview-templates/NotFoundPagePreview"
import TransparencyPagePreview from "./preview-templates/TransparencyPagePreview"

CMS.init()
CMS.registerPreviewStyle("/styles.scss")
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("modalities", ModalitiesPagePreview)
CMS.registerPreviewTemplate("extras", ExtrasPagePreview)
CMS.registerPreviewTemplate("contact", ContactPagePreview)
CMS.registerPreviewTemplate("faq", FaqPagePreview)
CMS.registerPreviewTemplate("notfound", NotFoundPagePreview)
CMS.registerPreviewTemplate("transparency", TransparencyPagePreview)
