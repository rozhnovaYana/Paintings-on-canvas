const filter=()=>{
    const buttons=document.querySelectorAll(".portfolio-menu>li"),
    images=document.querySelectorAll(".portfolio-wrapper .portfolio-block"),
    no=document.querySelector(".portfolio-no")
    buttons.forEach(btn=>{
        btn.addEventListener("click", (e)=>{
            buttons.forEach(i=>i.classList.remove("active"))
            btn.classList.add("active")
            const title=e.target.getAttribute("data-btn")
            images.forEach(image=>{
                if(title=="all"){
                    image.style.display='block'
                }else{
                    image.style.display='none'
                    image.getAttribute("data-image")===title?image.style.display='block':no.style.display='block'
                }
                
            })
            
        })
    })
}
export default filter;