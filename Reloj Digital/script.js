
    function actualizarReloj() {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, "0");
        const minutos = ahora.getMinutes().toString().padStart(2, "0");
        const segundos = ahora.getSeconds().toString().padStart(2, "0");
        const dia = ahora.getDate().toString().padStart(2, "0");
        const mes = (ahora.getMonth() + 1).toString().padStart(2, "0");
        const anio = ahora.getFullYear();

        // Actualizar hora y fecha
        const reloj = document.getElementById("reloj");
        const fecha = document.getElementById("fecha");
        const mensaje = document.getElementById("mensaje");
        reloj.innerText = `${horas}:${minutos}:${segundos}` 
        

            // Mostrar mensaje según la hora
            let textoMensaje = "";
            if (horas >= 0 && horas < 7) {
                textoMensaje = "Es hora de descansar. Apaga y sigue mañana";
            } else if (horas >= 7 && horas < 12) {
                textoMensaje = "Buenos días, desayuna fuerte y a darle con el código";
            } else if (horas >= 12 && horas < 14) {
                textoMensaje = "Echa un rato más pero no olvides comer";
            } else if (horas >= 14 && horas < 16) {
                textoMensaje = "Espero que hayas comido";
            } else if (horas >= 16 && horas < 18) {
                textoMensaje = "Buenas tardes, el último empujón";
            } else if (horas >= 18 && horas < 22) {
                textoMensaje = "Esto ya son horas extras, ... piensa en parar pronto";
            } else if (horas >= 22 && horas < 24) {
                textoMensaje = "Buenas noches, es hora de pensar en parar y descansar";
            }

            mensaje.textContent = textoMensaje;
        
    
        }
    // Llamar a la función cada segundo
    setInterval(actualizarReloj, 1000);
    actualizarReloj(); // Llamar inmediatamente para inicializar
        
