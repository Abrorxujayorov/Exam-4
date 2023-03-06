const control = document.querySelector('.container')
const loader = document.querySelector('.loader')
function produc(collbak) {
  const api = `https://api.escuelajs.co/api/v1/products`
  fetch(api)
  .then((res) => res.json())
  .then(date => {
    for (let i = 0; i < date.length; i++) {
      let card = document.createElement('div')
      card.setAttribute('class','card')
      let id = card.setAttribute('id',`${date[i].id}`)
      let pic = document.createElement('img') 
      pic.setAttribute('class','card-img-top')
      pic.src = `${date[i].images} alt="pic"`
      let cardbody = document.createElement('div')
      cardbody.setAttribute('class','card-body')
      let name = document.createElement('h5')
      name.setAttribute('class','card-title')
      name.innerHTML += `${date[i].category.name}`
      let text = document.createElement('p')
      text.setAttribute('class','card-text')
      text.innerHTML += `${date[i].description}`
      let list = document.createElement('ul')
      list.setAttribute('class','list-group list-group-flush')
      let title = document.createElement('li')
      title.setAttribute('class','list-group-item')
      title.innerHTML += `${date[i].title}`
      let price = document.createElement('li')
      price.setAttribute('class','list-group-item')
      price.innerHTML += `price: $${date[i].price}`
      let btnControl = document.createElement('div')
      btnControl.setAttribute('class','card-body')
      let delBtn = document.createElement('button')
      delBtn.setAttribute('class','btn btn-danger btn-sm')
      delBtn.setAttribute('id',`${date[i].id}`)
      delBtn.innerHTML += 'DELETE'
      let editBtn = document.createElement('button')
      editBtn.setAttribute('class','btn btn-primary btn-sm m-1 modal-b')
      editBtn.setAttribute('data-bs-target','#exampleModalToggle')
      editBtn.setAttribute('data-bs-toggle','modal')
      editBtn.innerHTML += 'Edit'
      control.appendChild(card)
      card.appendChild(pic)
      card.appendChild(cardbody)
      cardbody.appendChild(name)
      cardbody.appendChild(text)
      card.appendChild(list)
      list.appendChild(title)
      list.appendChild(price)
      card.appendChild(btnControl)
      btnControl.appendChild(delBtn)
      btnControl.appendChild(editBtn)
      loader.classList.remove('loader-b')
    }
  })
}

const editBtnS = document.getElementById('editor')
const edittitleinp = document.getElementById('TitleEdit')
const edipriveinp = document.getElementById('priceEdit')
produc(
  control.addEventListener('click', (e) => {
    if (e.target.matches('.btn-danger')) {
      fetch(`https://api.escuelajs.co/api/v1/products/${e.target.id}`,{
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then(date => console.log(date))
      // window.location.reload()
    }
    else if (e.target.matches('.btn-primary')){
      console.log(edittitleinp.value = card);
    }
  }),
  editBtnS.addEventListener('click', (e) =>{
    fetch(`https://api.escuelajs.co/api/v1/products/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-type':'application/json; charset=UTF-8',  
      },
      body: JSON.stringify({
        title: edittitleinp.value,
        price: edipriveinp.value,
      })
    })
    .then((res) => res.json())
    .then(data => console.log(data));
    window.location.reload()
  
})

)
const inputsrch = document.getElementById('qidiruv')
const container = document.querySelector('.control')
function qoda(arr) {
  loader.classList.add('loader-b')
  for (let i = 0; i < arr.length; i++) {
    control.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src=${arr[i].images} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${arr[i].category.name}</h5>
    <p class="card-text">${arr[i].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Title: ${arr[i].title}</li>
    <li class="list-group-item">Price: $${arr[i].price}</li>
  </ul>
  <button type="button" class="btn btn-danger btn-sm mb-2">Delete</button>
  <button type="button" class="btn btn-primary btn-sm">Edit</button>
</div>

    `   
    loader.classList.remove('loader-b') 
  }
}



function qi() {
  const qidir = 'Https://api.escuelajs.co/api/v1/products/'
  fetch(qidir)
  .then((res) => res.json())
  .then(data => {
    inputsrch.addEventListener("input", function(e) {
      let names = e.target.value;
      let search = data.filter((item) =>
      item.category.name.toLowerCase().includes(names.toLowerCase())
      );
      control.innerHTML = ''
      qoda(search)
    });
  })
}  
qi()