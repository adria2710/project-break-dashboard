

function generatePassword() {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 12 || length > 50) {
        alert("Por favor, selecciona un número entre 12 y 50.");
        return;
    }

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";

    // Unir todos los caracteres posibles
    const allCharacters = upperCase + lowerCase + numbers + symbols;

    // Garantizar al menos uno de cada tipo
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Generar el resto de la contraseña
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    // Mezclar la contraseña para evitar patrones
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    // Mostrar la contraseña generada
    const resultDiv = document.getElementById('resultadoContraseña');
    resultDiv.textContent = password;
}