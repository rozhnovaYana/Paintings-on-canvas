const modals = () => {
    let clickModal=false;
    const modalHandler = (targetSelector, modalSelector, closeSelector, destroy=false) => {
        const modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            target = document.querySelectorAll(targetSelector),
            windows=document.querySelectorAll("[data-modal]"),
            scroll=scrollWidth()
            
        target.forEach(item => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                if(destroy){
                    item.remove()
                }
                clickModal=true
                windows.forEach(i=>i.style.display="none")
                modal.style.display = "block"
                document.body.style.overflow = "hidden"
                document.body.style.marginRight=`${scroll}px`
                try{
                    document.querySelector(".fixed-gift").style.marginRight=`${scroll}px`
                }catch{}
                
            })

        })
        close.addEventListener("click", ()=> {
            windows.forEach(i=>i.style.display="none")
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.style.marginRight=`0px`
                try{
                    document.querySelector(".fixed-gift").style.marginRight=`0px`
                }catch{}
        })
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                windows.forEach(i=>i.style.display="none")
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.style.marginRight=`0px`
                try{
                    document.querySelector(".fixed-gift").style.marginRight=`0px`
                }catch{}
            }
        })
    }

    const scrollWidth=()=>{
        let div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth
    }
    const showModal=(modalSelector, time)=>{
        setTimeout(()=>{
            let display
            document.querySelectorAll("[data-modal]").forEach(i=>{
                if(getComputedStyle(i).display!=="none"){
                    display=true
                    console.log(display)
                }
            })
            if(!display){
                const modal=document.querySelector(modalSelector)
                modal.style.display="block"
                document.body.style.overflow = "hidden"
                let scroll=scrollWidth()
                document.body.style.marginRight=`${scroll}px`
                try{
                    document.querySelector(".fixed-gift").style.marginRight=`${scroll}px`
                }catch{}
            }
        }, time)
       
       
        
        

    }
    const giftAfterScroll=(selector)=>{
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!clickModal && (window.pageYOffset + document.documentElement.clientHeight+3 >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        })

    }
    modalHandler(".button-design", ".popup-design", ".popup-design .popup-close")
    modalHandler(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close")
    modalHandler(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true)
    showModal(".popup-design", 5000)
    giftAfterScroll(".fixed-gift")

}
export default modals