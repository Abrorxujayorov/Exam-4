const select = document.getElementById('select')
function catigory() {
    const catigory = 'https://api.escuelajs.co/api/v1/categories'
    fetch(catigory)
    .then((res) => res.json())
    .then(date => {
        for (let i = 0; i < date.length; i++) {
            let cati = date[i].name
            let option = document.createElement('option')
            option.value = cati
            option.innerHTML += cati
            select.appendChild(option)
        }
    })
    select.addEventListener('change', () => {
        loader.classList.add('loader-b')
        setInterval(() => {
            loader.classList.remove('loader-b')
        }, 1000)
        fetch(`https://api.escuelajs.co/api/v1/${select.value}`)
        .then((res) => res.json())
        .then(date => {
        qoda(date)
})
})
}
catigory()

