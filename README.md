#  Página Web - Sorteo de Amigo Secreto

Este proyecto es una aplicación web que permite registrar una lista de amigos y 
realizar un sorteo aleatorio para asignar un "amigo secreto". Es ideal para eventos
como intercambios de regalos, juegos de amistad o celebraciones.

## Funcionalidades

- Agregar nombres de amigos a una lista.
- Visualizar la lista completa de participantes.
- Realizar un sorteo aleatorio entre los amigos ingresados.
- Mostrar el resultado del sorteo dentro de un elemento de lista `<ul>`.
- Interfaz interactiva y validaciones básicas (mínimo 2 participantes).

## Tecnologías Utilizadas

- **HTML** – Estructura del contenido.
- **CSS** – Estilos y diseño visual (si está presente).
- **JavaScript** – Lógica de funcionamiento del sorteo.

## Estructura del Proyecto

- index.html     -      # Página principal con formulario y lista.
- script.js      -      # Lógica de la aplicación (agregar amigos, sortear, etc.).
- styles.css     -      # Estilos personalizados.
- README.md      -      # Guía.

## Cómo usar

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa los nombres de los participantes en el campo de texto.
4. Presiona el botón para agregar cada nombre.
5. Una vez agregados al menos 2 amigos, haz clic en **"Sortear"** para conocer el amigo secreto.

## Ejemplo de Uso

```
1. Ingresas: Juan, Ana, Pedro
2. Presionas "Sortear"
3. Resultado mostrado: Tu amigo secreto es: Pedro

```

## 📌 Notas
- La aplicación **no evita repeticiones** o múltiples sorteos (función básica).
- El sorteo es **aleatorio cada vez que se presiona el botón**.
