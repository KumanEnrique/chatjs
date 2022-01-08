const socket = io()
const form = document.getElementById("form")
const message = document.getElementById('message')
const view = document.getElementsByClassName("view")[0]

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    socket.emit("message",message.value)
    message.value = ""

})
socket.on('messageServer',(data)=>{
    const parrafo = document.createElement('p')
    parrafo.innerHTML = data
    view.prepend(parrafo)   
})