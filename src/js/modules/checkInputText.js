const checkInputText=(selector)=>{
    const inputs=document.querySelectorAll(selector)
    inputs.forEach(input=>{
        let value=input.value
        input.addEventListener("input", ()=>{
            if(input.value.match(/[^а-яё\s]/ig)){
                input.value=value
            }else{
                value=input.value
            }
        })

    })
}
export default checkInputText;