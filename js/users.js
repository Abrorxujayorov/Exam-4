
const userCont = document.getElementById('userCont')
function sol(arg) {
    fetch('https://api.escuelajs.co/api/v1/users ')
    .then((res) => res.json())
    .then(date => {
        // console.log(date);
        for (let i = 0; i < date.length; i++) {
            const tbody = document.createElement('tbody')
            userCont.appendChild(tbody)
            tbody.innerHTML += `
            <tr>
            <th scope="col"><img src=${date[i].avatar} alt="avatr" width="30px"></th>
              <td scope="row">${date[i].name}</td>
              <td>${date[i].email}</td>
              <td>${date[i].password}</td>
              <td>
              <button type="button" class="btn btn-danger userdelate" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" id="${date[i].id}">Delete</button>
              <button type="button" class="btn btn-secondary addbtns" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add</button>
              </td>
            </tr>
            `
        }
    })
}
const cardMadal = document.querySelector('.cardMadal')
const madalname = document.getElementById('madalname')
const madalemail = document.getElementById('madalemail')
const madalpassword = document.getElementById('madalpassword')
const madalpic = document.getElementById('madalpic')
sol(
    userCont.addEventListener('click', (e) => {
        console.log(e.target.id);
        if (e.target.matches('.userdelate')) {
            fetch(`https://api.escuelajs.co/api/v1/users/${e.target.id}`,{
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then(data => console.log(data))
            window.location.sol()
        }
        else if(e.target.matches('.addbtns')){
            cardMadal.style.display = 'block'
        }
        else if(e.target.matches('.editooor')){
            
        }
    })
)
cardMadal.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://api.escuelajs.co/api/v1/users',{
                method: 'POST',
                headers: {
                'Content-type':'application/json; charset=UTF-8',  
            },
            body: JSON.stringify ({
                "id": 1,
                "email": madalemail.value,
                "password": "1234",
                "name": madalname.value,
                "role": "customer",
                "avatar": madalpic.value,
        }),

    })
    .then((res) => res.json())
    .then(data => console.log(data))
    cardMadal.style.display = 'none'
})










