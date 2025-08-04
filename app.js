
let listaDeAmigos = [];



//Para los textos y titulos
function asignarTextoElemento(Elemento, texto){
    let titulo = document.querySelector(Elemento);
    titulo.innerHTML = texto;
}

asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus Amigos');
    
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
        console.log(listaDeAmigos);
    }
}

function actualizarLista(){
    //obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //limpiar la lista existente
    lista.innerHTML = '';
    //iterar sobre el arreglo
    listaDeAmigos.forEach(function(amigo) {
        //crear un nuevo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigo; //asignar el nombre del amigo al elemento
        lista.appendChild(li); //agregar el elemento a la lista
    });
    //agregar elementos a la lista, para cada amigo crear elemento de la lista
    let actualizarLista = document.getElementById('listaAmigos');
    console.log(actualizarLista);

}

function sortearAmigo() {
        //validar que haya amigos disponibles
    if (listaDeAmigos.length >= 2) {
        //generar un indice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        //obtener el indice y mostrar el nombre del amigo
        let amigoSeleccionado = listaDeAmigos[indiceAleatorio];
        //mostrar el nombre del amigo secreto
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigoSeleccionado}`;
    } else {
        alert('Por favor, ingrese al menos dos amigos para realizar el sorteo.');
    }
}
