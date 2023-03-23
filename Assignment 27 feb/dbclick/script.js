const textArea=document.querySelector('#textArea')
const copyBtn=document.querySelector('#copyBtn')
const content=document.querySelector('.content')


textArea.addEventListener('dblclick',()=>{
    const copydata=navigator.clipboard;
    copydata.writeText(textArea.value)

    alert("Text is copied to clipboard")
})

copyBtn.addEventListener('click',()=>{
    const cb=navigator.clipboard;
    cb.writeText(textArea.value)

})

