import modals from "./modules/modals"
import sliders from "./modules/sliders"
import forms from "./modules/forms"
import mask from "./modules/mask"
import checkInputText from "./modules/checkInputText"
import showMoreStyles from './modules/showMoreStyles'
window.addEventListener("DOMContentLoaded", ()=>{
    modals()
    sliders(".feedback-slider-item", "horizontal",".main-prev-btn", ".main-next-btn" )
    sliders(".main-slider-item", "vertical" )
    forms()
    mask('[name="phone"]')
    checkInputText('[name="name"]')
    checkInputText('[name="message"]')
    showMoreStyles(".button-styles", "#styles .row")


})