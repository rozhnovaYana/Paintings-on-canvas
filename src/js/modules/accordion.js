const accordion = (triggersSelector)=>{
    const btns=document.querySelectorAll(triggersSelector);
    btns.forEach(btn=>{
        btn.addEventListener("click", function(){
            btns.forEach(i=>{
                if(i===this){
                    btn.classList.toggle("active")
                }else{
                    i.classList.remove('active')
                }}
                )
            
        })
    })
   
    // 
    // blocks.forEach(i=>i.classList.add('animated', "fadeInDown"))
    // btns.forEach(btn=>{
    //     btn.addEventListener('click', function(){
    //         btns.forEach(i=>{
    //             if(i!==this){
    //                 i.classList.remove("active")}
    //             }
    //             )
    //         this.classList.add('active')
    //     })
    // })
}
export default accordion;