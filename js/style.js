const loginWrapper = document.getElementsByClassName('log')
const logbutton = document.getElementById('login')
const cancelButton = document.getElementsByClassName('cancelbtn')

logbutton.addEventListener('click',()=>{
    loginWrapper[0].style.display = 'block'
})
for(let i = 0; i < cancelButton.length; i++){
    cancelButton[i].addEventListener('click',()=>{
        loginWrapper[i].style.display = 'none'
    })
}
function sign(){
    loginWrapper[0].style.display = 'none'
    loginWrapper[1].style.display = 'block'
}
function log(){
    loginWrapper[1].style.display = 'none'
    loginWrapper[0].style.display = 'block'
}
function nextpage(){
    window.location.href = './shop.html'
}

