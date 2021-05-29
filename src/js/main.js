import modals from "./modules/modals"
import sliders from "./modules/sliders"
import forms from "./modules/forms"
import mask from "./modules/mask"
import checkInputText from "./modules/checkInputText"
import showMoreStyles from './modules/showMoreStyles'
import calc from "./modules/calc"
import filter from "./modules/filter"
import pictureSize from "./modules/pictureSize"
import accordion from "./modules/accordion"
window.addEventListener("DOMContentLoaded", ()=>{
    let state={}
    modals()
    sliders(".feedback-slider-item", "horizontal",".main-prev-btn", ".main-next-btn" )
    sliders(".main-slider-item", "vertical" )
    forms(state)
    mask('[name="phone"]')
    checkInputText('[name="name"]')
    checkInputText('[name="message"]')
    showMoreStyles(".button-styles", "#styles .row")
    calc("#size", "#material", "#options", ".calc .promocode", '.calc-price', state)
    filter()
    pictureSize(".sizes-block")
    accordion(".accordion-heading", ".accordion-block")
    


})