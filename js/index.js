fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let fila = ''
        for (let escuelajs of data) {
            fila += `<div class="card mb-5 col-4" style="width: 18rem;">
        <img src="${escuelajs.avatar}" class="card-img-top" alt="${escuelajs.avatar}">
        <div class="card-body">
        <ul class="list-group list-group-flush">
    <li class="list-group-item text-center">Nombre: ${escuelajs.name}</li>
    <li class="list-group-item text-center">Email: ${escuelajs.email}</li>
    <li class="list-group-item text-center">Contraseña: ${escuelajs.password}</li>
    </ul>
    </div>
    </div>`
        }
        document.getElementById("tabla").innerHTML = fila
    })