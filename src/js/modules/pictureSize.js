const pictureSize=(imgSelector)=>{
    const blocks=document.querySelectorAll(imgSelector);
    const showImg=(block)=>{
        const img=block.querySelector("img")
        img.src=img.src.slice(0, -4)+"-1.png"
        img.style.position="relative"
        img.style.zIndex="10"

    }
    const hideImg=(block)=>{
        const img=block.querySelector("img")
        img.src=img.src.slice(0, -6)+".png"
        img.style.position=""
        img.style.zIndex=""
    }
    blocks.forEach(block=>{
        block.addEventListener("mouseover", ()=>{
            showImg(block)
        })
        block.addEventListener("mouseout", ()=>{
            hideImg(block)
        })
    })
}
export default pictureSize;