let amigoSecreto = '';
let listaDeAmigos = [];



//Para los textos y titulos
function asignarTextoElemento(Elemento, texto){
    let titulo = document.querySelector(Elemento);
    titulo.innerHTML = texto;
}


//corregir codigo en proceso
function agregarAmigo() {
    // Obtener el valor del campo de entrada y agregarlo a la lista
    let amigoSecreto = document.getElementById('amigo').value;
    // Validar que el campo no esté vacío
    if (amigoSecreto.trim() !== '') {
        listaDeAmigos.push(amigoSecreto);
        document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
        actualizarLista();
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

//Corregir codigo en proceso
function actualizarLista() {
    let listaDeAmigos = document.querySelector('.lista-amigos');
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Amigo Secreto');
    asignarTextoElemento('h2', 'Digite el nombre de sus Amigos');
    
}

//corregir codigo en proceso
function sortearAmigos() {
    let 
    if (listaDeAmigos.length > 0) {
        listaDeAmigos.sort();
        actualizarLista();
    }
}