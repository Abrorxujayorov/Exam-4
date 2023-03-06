const hero = document.querySelector('.hero')
const Products = document.querySelector('.products')
const usersss = document.querySelector('.users')
const alican = document.getElementById('alican')
const titleText = document.querySelector('.title-text')
const form = document.querySelector('.input-control')
const input = document.getElementById('type')
const menu = document.querySelector('.menu-list')
const sss = document.querySelector('.sss')
const arr = []

Products.addEventListener('click',() => {
    window.location = './prokuc.html'
})
usersss.addEventListener('click',() => {
    window.location = './users.html'
})
alican.addEventListener('click', () => {
    if(sss.innerHTML == ''){
        document.body.style.backgroundColor = '#fff'
        sss.innerHTML = "s"
        alican.style.backgroundColor = "#013141"
        titleText.style.color = '#000'
    }
    else(
        document.body.style.backgroundColor = '#013141',
        sss.innerHTML = "",
        alican.style.backgroundColor = "#fff",
        titleText.style.color = '#fff'
    )
})
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const inpval = input.value
    if (inpval == "") {
        alert("You must write something!")
    }
    else{
        menu.innerHTML += `
        <div class="item">
                    <p class="meni-info">${inpval}</p>
                    <div class="icons">
                        <i class="fa-solid fa-check" id="chekout"></i>
                        <i class="fa-solid fa-pen-to-square" id="edit"></i>
                        <i class="fa-solid fa-trash" id="delit"></i>
                    </div>
            </div>
        `
        arr.push({
            info: inpval,
            id: new Date().getTime().toString()
        })
        input.value = ''
    }
})
const checkut = document.querySelector('.fa-check')
menu.addEventListener("click", e => {
    if (e.target.matches(".fa-check")) {
        e.target.style.color = 'red'
        e.target.parentElement.parentElement.classList.add("fall");
    }
    else if (e.target.matches('.fa-pen-to-square')) {
        input.value = inpval
    }
    else if (e.target.matches('.fa-trash')) {
        e.target.parentElement.parentElement.style.display = 'none'
    }
})


