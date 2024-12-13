// Seleccionar elementos del DOM
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const addLinkButton = document.getElementById('add-link-button');
const linksContenedor = document.getElementById('links-contenedor');

// Recuperar links desde localStorage
const storedLinks = JSON.parse(localStorage.getItem('links')) || [];

// Función para renderizar los enlaces en el DOM
function renderLinks() {
    linksContenedor.innerHTML = ''; // Limpiar el contenedor
    storedLinks.forEach((link, index) => {
        // Crear elementos del enlace
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';

        // Botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => deleteLink(index);

        // Agregar elementos al li y luego al contenedor
        li.appendChild(a);
        li.appendChild(deleteButton);
        linksContenedor.appendChild(li);
    });
}

// Guardar los links en localStorage
function saveLinks() {
    localStorage.setItem('links', JSON.stringify(storedLinks));
}

// Función para añadir un nuevo enlace
function addLink() {
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();

    if (!name || !url) {
        alert('Por favor, introduce un nombre y una URL válidos.');
        return;
    }

    // Agregar el nuevo link al array
    storedLinks.push({ name, url });
    saveLinks();

    // Limpiar inputs
    nameInput.value = '';
    urlInput.value = '';

    // Renderizar enlaces actualizados
    renderLinks();
}

// Función para eliminar un enlace
function deleteLink(index) {
    storedLinks.splice(index, 1); // Eliminar del array
    saveLinks(); // Guardar los cambios
    renderLinks(); // Actualizar el DOM
}

// Añadir evento al botón
addLinkButton.addEventListener('click', addLink);

// Renderizar enlaces al cargar la página
renderLinks();