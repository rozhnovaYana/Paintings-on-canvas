const sliders=(slidesSelector, dir, prevSelector, nextSelector)=>{
    const slides=document.querySelectorAll(slidesSelector);
    let slide=1,
    paused=false
    
    const showSlide=(n)=>{
        if(n>slides.length){
            slide=1
        }
        if(n==0){
            slide=slides.length
        }
        slides.forEach(i=>{
            i.style.display="none"
            i.classList.add("animated")
        })
        slides[slide-1].style.display="block"
    }
    showSlide(slide)
    const moveSlide=(n)=>{
        showSlide(slide+=n)
    }
        
    
    try{
        const prev=document.querySelector(prevSelector),
        next=document.querySelector(nextSelector)
        prev.addEventListener("click", ()=>{
            moveSlide(-1); 
            slides[slide-1].classList.remove("slideInLeft")
            slides[slide-1].classList.add("slideInRight")
        })
        next.addEventListener("click", ()=>{
            moveSlide(1)
            slides[slide-1].classList.remove("slideInRight")
                slides[slide-1].classList.add("slideInLeft")
        })
    }catch{

    }
   
    const autoPlay=()=>{
        if(dir=="vertical"){
            paused=setInterval(()=>{
                moveSlide(1)
                slides[slide-1].classList.add("slideInLeft")

            }, 3000)
        }else{
            paused=setInterval(()=>{
                moveSlide(1)
                slides[slide-1].classList.remove("slideInLeft")
                slides[slide-1].classList.add("slideInRight")
            }, 3000)
        }
       
    }
    slides[0].parentNode.style.overflow="hidden"
    slides[0].parentNode.addEventListener("mouseenter",()=>{
       clearInterval(paused)
    }
    )
    slides[0].parentNode.addEventListener("mouseleave",()=>{
        autoPlay()
    }
    )
    autoPlay()

   
    
}
export default sliders;