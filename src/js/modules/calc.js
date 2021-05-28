import {getData} from "../services/requests"
const calc=(sizeSelector, materialSelector, optionsSelector, promocodSelector, rezultSelector, state )=>{
    const size=document.querySelector(sizeSelector),
    material=document.querySelector(materialSelector),
    options=document.querySelector(optionsSelector),
    promocod=document.querySelector(promocodSelector),
    rezult=document.querySelector(rezultSelector)

    let sum=0;

    const setValues=(elem, prop)=>{
        elem.querySelectorAll("option").forEach(i=>{
            const title=i.textContent
            i.value=prop[title]
        })
    }
    const getValueFromServices=()=>{
        getData("assets/db.json")
        .then(rez=>{
            const calculator=rez.calculator
            setValues(size, calculator.size)
            setValues(material, calculator.material)
            setValues(options, calculator.options)
        })
    }
    getValueFromServices()
   
    const calcRezult=(e)=>{
        sum=Math.round((+size.value)*(+material.value)+(+options.value))
        state[e.target.id]=e.target.value
        if(sum===0){
            rezult.textContent="Первые два поля обязательны для заполнения"
        }else if(promocod.value=="IWANTPOPART"){
            rezult.textContent=Math.round(sum*0.7)
            state.sum=sum*0.7
        }else{
            rezult.textContent=sum
            state.sum=sum
        }
    }
    size.addEventListener("change", calcRezult)
    material.addEventListener("change", calcRezult)
    options.addEventListener("change", calcRezult)
    promocod.addEventListener("input", calcRezult)
    
}
export default calc;