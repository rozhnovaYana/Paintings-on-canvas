// import inputForNum from "./inputForNum"
const forms=()=>{
    const allForms=document.querySelectorAll("form"),
    allInputs=document.querySelectorAll("input"),
    upload=document.querySelectorAll('[name="upload"]')
    upload.forEach(input=>{
        input.addEventListener("input", ()=>{
            const fileName=input.files[0].name
            let arrayFromFileName=fileName.split(".")
            let dots;
            arrayFromFileName[0].length>10?dots="...":dots="."
            input.previousElementSibling.textContent=arrayFromFileName[0].substring(0, 10)+dots+arrayFromFileName[1]
        })
    })
    const massages={
        loading:"Загрузка...",
        done:"Ваши данные были успешно отправлены",
        failed:"Что-то пошло не так...",
        spinner:"assets/img/spinner.gif",
        ok:"assets/img/ok.png",
        failed:"assets/img/fail.png"
    },
    path={
        designer:"assets/server.php",
        question:"assets/question.php"
    }
    // inputForNum(inputNumber)
    const formHandler=async (url, data)=>{
        const res=await fetch(url, {
            method:"POST",
            body:data
        })
        return await res.text()
    }

    const clearInputs=()=>{
        allInputs.forEach(input=>{
            input.value=""
        })
        upload.forEach(input=>input.previousElementSibling.textContent="Файл не выбран")
    }

    allForms.forEach(form=>{
        form.addEventListener("submit", (e)=>{
            e.preventDefault()
            //скрываем форму
            form.classList.add("animated", "fading")

            
            //создаем блок для трансляции сообщения и картинки в процеесе отправки формы
            let statusDiv=document.createElement('div')
            form.parentNode.appendChild(statusDiv)
            statusDiv.classList.add('status')
            statusDiv.classList.add("animated", "fadeInDown")

            let statusImg=document.createElement("img")
            statusDiv.appendChild(statusImg)
            statusImg.setAttribute("src", massages.spinner)

            let statusText=document.createElement("div")
            statusDiv.appendChild(statusText)
            statusText.textContent=massages.loading
            let api;
            form.closest(".popup-design")?api=path.designer:api=path.question
            const data=new FormData(form)
            formHandler(api, data)
            .then((data)=>{
                statusImg.setAttribute("src", massages.ok)
                statusText.textContent=massages.done

            }).catch(()=>{
                statusImg.setAttribute("src", massages.failed)
                statusText.textContent=massages.failed
            }).finally(()=>{
                clearInputs()
                setTimeout(()=>{
                    statusDiv.remove()
                    form.classList.remove("fading")
                    form.classList.add("animated", "fadeInDown")
                    form.closest("[data-modal]").style.display="none"
                    document.body.style.overflow = ""
                }, 5000)
            })
        })
    })
}
export default forms