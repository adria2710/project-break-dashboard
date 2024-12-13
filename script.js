/*CAMBIAR IMAGEN FONDO*/

// Lista de URLs de imágenes de fondo
const imageUrls = [
    "https://images.unsplash.com/photo-1564091422888-15640d9709a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1680202264312-8e83fa919655?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708719290992-dfff4d7cba1f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1708190431191-fa4eda41c4d0?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

// Función para cambiar la imagen de fondo
function changeBackground() {
    // Seleccionar una imagen al azar
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];

    // Cambiar la imagen de fondo
    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backdropFilter = "blur(10px)";
}

// Cambiar la imagen de fondo al cargar la página
changeBackground();

// Cambiar la imagen cada 15 segundos (15000 ms)
setInterval(changeBackground, 15000);

/*--------------------------------------------*/