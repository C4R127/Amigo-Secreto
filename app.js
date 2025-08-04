let amigoSecreto = '';
let listaDeAmigos = [];



//Para los textos y titulos
function asignarTextoElemento(Elemento, texto){
    let titulo = document.querySelector(Elemento);
    titulo.innerHTML = texto;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Amigo Secreto');
    asignarTextoElemento('h2', 'Digite el nombre de sus Amigos');
    
}

//corregir codigo en proceso
function agregarAmigo() {
    // Obtener el valor del campo de entrada y agregarlo a la lista
    let amigoSecreto = document.getElementById('amigo').value;
    // Validar que el campo no esté vacío
    if (amigoSecreto === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    } else {
        listaDeAmigos.push(amigoSecreto);
        actualizarLista();
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
    }
}

function actualizarLista(){
    let listaDeAmigos = document.getElementById('listaDeAmigos');
    // Limpiar la lista antes de actualizarla
    document.getElementById('listaDeAmigos') = '';
    //iterar sobre el arreglo
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = document.createElement('li');
        amigo.textContent = listaDeAmigos[i];
        listaDeAmigos.appendChild(amigo);
    }
    //agregar elemento a la lista
    document.getElementById('listaDeAmigos').appendChild(listaDeAmigos);
}
