let btn = document.getElementById('button')
let resp = document.getElementById('resp')

btn.addEventListener('click',myfn)

function myfn(){
    resp.classList.toggle('show')
}