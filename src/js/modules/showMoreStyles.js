const showMoreStyles=(trigger, selectorStyles)=>{
    const styles=document.querySelectorAll(selectorStyles),
    btn=document.querySelector(trigger)
    styles.forEach(i=>{
        i.classList.add("animated", "fadeInDown")
    })
    btn.addEventListener("click", ()=>{
        styles.forEach(i=>{
            i.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs")
            i.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")
        })
        btn.remove()
    })
}
export default showMoreStyles;