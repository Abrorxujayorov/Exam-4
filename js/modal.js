const nameinp = document.getElementById('recipient-name')
const descriptioninp = document.getElementById('message-text')
const titleinp = document.getElementById('titleinp')
const priceinp = document.getElementById('priceinp')
const modaleditBtn = document.getElementById('modalEditBtn')
const modalEditBtn = document.getElementById('modalEditBtn')
const id = new Date().getMilliseconds()


modalEditBtn.addEventListener('click', (e) => {
    const api = `https://api.escuelajs.co/api/v1/products/`
  fetch(api , {
    method: 'POST',
    headers: {
    'Content-type':'application/json; charset=UTF-8',  
},
    body: JSON.stringify({
      title: titleinp.value,
      price: priceinp.value,
      description: descriptioninp.value,
      categoryId: 1,
      images: ["http://uzsmart.ru/ismlar-manosi/images/uzbekcha/abror/abror.jpg"]
    })
  }) 
  .then((res) => res.json())
  .then((date) => console.log(date))
  // window.location.reload()
})
