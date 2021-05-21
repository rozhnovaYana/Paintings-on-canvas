import {getData} from "../services/requests"
const showMoreStyles=(trigger, wrapper)=>{
    const btn=document.querySelector(trigger)
    // styles.forEach(i=>{
    //     i.classList.add("animated", "fadeInDown")
    // })
    // btn.addEventListener("click", ()=>{
    //     styles.forEach(i=>{
    //         i.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs")
    //         i.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1")
    //     })
    //     btn.remove()
    // })
    btn.addEventListener("click", function(){
        getData('assets/db.json')
        .then(res=>createCard(res.styles))
        .then(()=>this.remove())
        .catch(e=>console.log(e))
        
    })
    const createCard=(response)=>{
        response.forEach(({src, title, link})=>{
            const div=document.createElement('div')
            div.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1","animated", "fadeInDown")
            div.innerHTML=`
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `
            document.querySelector(wrapper).appendChild(div)
        })
       
    }
}
export default showMoreStyles;